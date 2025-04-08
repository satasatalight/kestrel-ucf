import { prisma } from "@/lib/prisma";
import { Devlog } from "@prisma/client";

export const getAllDevlogs = async (): Promise<Devlog[]> => {
  return await prisma.devlog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getDevlogById = async (devlogId: string) => {
  return await prisma.devlog.findUnique({
    where: {
      id: devlogId,
    },
  });
};
