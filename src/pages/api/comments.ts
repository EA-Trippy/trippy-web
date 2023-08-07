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
    const { currentUser } = await serverAuth(req, res);
    const { body, commentId } = req.body;
    const { postId, lastId } = req.query;
    const isFirstPage = !lastId;

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

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
          postId,
        },
        include: {
          user: true,
        },
      });
    }

    if (req.method === 'POST') {
      comment = await prisma.comment.create({
        data: {
          body,
          userId: currentUser.id,
          postId,
        },
      });
    }

    if (req.method === 'PATCH') {
      comment = await prisma.comment.update({
        where: {
          id: commentId,
        },
        data: {
          body,
        },
      });
    }

    if (req.method === 'DELETE') {
      comment = await prisma.comment.delete({
        where: {
          id: commentId,
        },
      });
    }

    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
