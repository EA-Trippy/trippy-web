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
    const { body } = req.body;
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
    }

    if (req.method === 'PATCH') {
      post = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          body,
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
