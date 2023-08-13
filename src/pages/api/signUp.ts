import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  //   try {
  //     const user = await prisma.user.create({

  //     });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(400).end();
  //   }

  return res.status(200).json({ name: 'John' });
}
