import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.method !== 'GET' &&
    req.method !== 'POST' &&
    req.method !== 'PATCH' &&
    req.method !== 'DELETE'
  ) {
    return res.status(405).end();
  }

  try {
    const { body } = req.body;
    const { postId, lastId, commentId } = req.query;
    const isFirstPage = !lastId;

    let comment;

    if (req.method === 'GET') {
      comment = await prisma.comment.findMany({
        take: 20,
        ...(!isFirstPage && {
          skip: 1,
          cursor: {
            id: lastId as string,
          },
        }),
        where: {
          postId: postId as string,
        },
        include: {
          user: true,
        },
      });
    }

    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);
      comment = await prisma.comment.create({
        data: {
          body,
          userId: currentUser.id,
          postId: postId as string,
        },
      });

      try {
        const post = await prisma.post.findUnique({
          where: {
            id: postId as string,
          },
        });

        if (post?.userId) {
          await prisma.notification.create({
            data: {
              body: `'${currentUser.username}' 님이 회원님의 게시글에 댓글을 등록했습니다: "${body}"`,
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

    if (req.method === 'PATCH') {
      comment = await prisma.comment.update({
        where: {
          id: commentId as string,
        },
        data: {
          body,
        },
      });
    }

    if (req.method === 'DELETE') {
      comment = await prisma.comment.delete({
        where: {
          id: commentId as string,
        },
      });
    }

    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
