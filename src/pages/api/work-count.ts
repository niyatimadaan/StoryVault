import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

async function getCount(): Promise<{ data: { nonfictionCount: number; fictionCount: number; poetryCount: number } | null; error: any }> {
  try {
    const nonfictionCount = await prisma.work.count({
      where: { genre: "nonfiction" }, 
    });
    const fictionCount = await prisma.work.count({
      where: { genre: "fiction" },
    });
    const poetryCount = await prisma.work.count({
      where: { genre: "poetry" },
    });

    console.log(nonfictionCount, fictionCount, poetryCount);
    return { data: { nonfictionCount, fictionCount, poetryCount }, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  } finally {
    await prisma.$disconnect(); 
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ data: any; error: any }>) {
  const resp = await getCount();
  
  if (resp.error) {
    return res.status(500).json({ data: null, error: resp.error });
  }
  
  res.status(200).json(resp);
}
