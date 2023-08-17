import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.method !== 'GET' &&
    req.method !== 'PATCH' &&
    req.method !== 'DELETE'
  ) {
    return res.status(405).end();
  }

  try {
    const {
      title,
      bodyHTML,
      bodyText,
      startDate,
      endDate,
      thumbnail,
      people,
      tag,
    } = req.body;
    const { postId } = req.query;

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    let post;

    if (req.method === 'GET') {
      post = await prisma.post.findUnique({
        where: {
          id: postId,
        },
        include: {
          user: true,
        },
      });

      await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          views: {
            increment: 1,
          },
        },
      });
    }

    if (req.method === 'PATCH') {
      post = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          title,
          bodyHTML,
          bodyText,
          startDate,
          endDate,
          thumbnail,
          people,
          tag,
        },
      });
    }

    if (req.method === 'DELETE') {
      post = await prisma.post.delete({
        where: {
          id: postId,
        },
      });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
