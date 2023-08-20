import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { search, lastId } = req.query;

  const searchText = search?.toString().trim();

  const isFirstPage = !lastId;

  try {
    const searchResults = await prisma.post.findMany({
      take: 20,
      ...(!isFirstPage && {
        skip: 1,
        cursor: {
          id: lastId as string,
        },
      }),
      where: {
        OR: [
          {
            title: {
              contains: searchText,
              mode: "insensitive",
            },
          },
          {
            bodyText: {
              contains: searchText,
              mode: "insensitive",
            },
          },
          {
            tag: {
              has: searchText,
            },
          },
        ],
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(searchResults);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
