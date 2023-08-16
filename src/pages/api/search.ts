import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const { search } = req.query;

  try {
    const searchResults = await prisma.post.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search as string,
              mode: 'insensitive',
            },
          },
          {
            body: {
              contains: search as string,
              mode: 'insensitive',
            },
          },
          {
            tag: {
              has: search as string,
            },
          },
        ],
      },
    });

    return res.status(200).json(searchResults);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
