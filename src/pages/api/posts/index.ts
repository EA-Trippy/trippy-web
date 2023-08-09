import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);
      const { title, body, startDate, endDate, thumbnail, people, tag } =
        req.body;

      const post = await prisma.post.create({
        data: {
          title,
          body,
          startDate,
          endDate,
          thumbnail,
          people,
          tag,
          userId: currentUser.id,
        },
      });

      return res.status(200).json(post);
    }

    if (req.method === 'GET') {
      const { userId, lastId } = req.query;
      const isFirstPage = !lastId;

      let posts;

      if (userId && typeof userId === 'string') {
        posts = await prisma.post.findMany({
          take: 20,
          ...(!isFirstPage && {
            skip: 1,
            cursor: {
              id: lastId as string,
            },
          }),
          where: {
            userId,
          },
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
      } else {
        posts = await prisma.post.findMany({
          take: 20,
          ...(!isFirstPage && {
            skip: 1,
            cursor: {
              id: lastId as string,
            },
          }),
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
      }

      return res.status(200).json(posts);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
