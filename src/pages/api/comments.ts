import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST' && req.method !== 'PATCH') {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req, res);
    const { body, commentId } = req.body;
    const { postId } = req.query;

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    let comment;

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

    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
