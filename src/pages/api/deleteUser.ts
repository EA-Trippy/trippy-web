import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req, res);

    const deleteUser = await prisma.user.delete({
      where: {
        id: currentUser.id,
      },
    });

    return res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
