import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(405).end();
  }

  try {
    const { postId } = req.body;

    const { currentUser } = await serverAuth(req, res);

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new Error('Invalid ID');
    }

    let updatedBookmarkedIds = [...(post.bookmarkedIds || [])];
    let userBookmarkedIds = [...(currentUser.bookmarkIds || [])];

    if (req.method === 'POST') {
      updatedBookmarkedIds.push(currentUser.id);
      userBookmarkedIds.push(postId);

      try {
        const post = await prisma.post.findUnique({
          where: {
            id: postId,
          },
        });

        if (post?.userId) {
          await prisma.notification.create({
            data: {
              body: `'${currentUser.username}' 님이 회원님의 '${post.title}' 게시글을 북마크 했습니다.`,
              receiver: post.userId,
              sender: currentUser.id,
              postId: post.id,
              isRead: false,
            },
          });

          await prisma.user.update({
            where: {
              id: post.userId,
            },
            data: {
              hasNotification: true,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (req.method === 'DELETE') {
      updatedBookmarkedIds = updatedBookmarkedIds.filter(
        (bookmarkedId) => bookmarkedId !== currentUser.id
      );

      userBookmarkedIds = userBookmarkedIds.filter(
        (bookmarkedId) => bookmarkedId !== postId
      );
    }

    await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        bookmarkIds: userBookmarkedIds,
      },
    });

    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        bookmarkedIds: updatedBookmarkedIds,
      },
    });

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
