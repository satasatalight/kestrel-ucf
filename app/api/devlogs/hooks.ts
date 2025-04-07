import { prisma } from "@/lib/prisma";

export const getAllDevlogs = async () => {
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
