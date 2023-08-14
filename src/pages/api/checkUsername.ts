import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { username } = req.query;

    const duplication = await prisma.user.findFirst({
      where: {
        username: username as string,
      },
    });

    if (duplication) {
      return res.status(200).json({ duplication: true });
    } else {
      return res.status(200).json({ duplication: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
