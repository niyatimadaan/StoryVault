import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: { query: { page?: 1 | undefined; genre?: "" | undefined } },
  res: { json: (arg0: any[]) => void }
) {
  const { page = 1, genre = "" } = req.query;
  console.log(page, "genre ",genre);
  const genreCheck = genre.toLowerCase();
  let works;
  if (genre === "") {
    works = await prisma.work.findMany({
      skip: (page - 1) * 10,
      take: 10,
      include: {
        publisher: true,
      },
    });
  } else {
    works = await prisma.work.findMany({
      where: { genre: genreCheck },
      skip: (page - 1) * 10,
      take: 10,
      include: {
        publisher: true,
      },
    });
  }
  res.json(works);
}
