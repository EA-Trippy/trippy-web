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
    const { userId, lastId } = req.query;
    const { notificationId } = req.body;

    const isFirstPage = !lastId;

    let notifications;

    if (req.method === 'GET') {
      notifications = await prisma.notification.findMany({
        take: 20,
        ...(!isFirstPage && {
          skip: 1,
          cursor: {
            id: lastId as string,
          },
        }),
        where: {
          receiver: userId as string,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      await prisma.user.update({
        where: {
          id: userId as string,
        },
        data: {
          hasNotification: false,
        },
      });
    }

    if (req.method === 'PATCH') {
      notifications = await prisma.notification.update({
        where: {
          id: notificationId,
        },
        data: {
          isRead: true,
        },
      });
    }

    if (req.method === 'DELETE') {
      notifications = await prisma.notification.delete({
        where: {
          id: notificationId,
        },
      });
    }

    return res.status(200).json(notifications);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
