import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type User = { id: number; email: string; name: string };

const getUsers = async (): Promise<User[]> => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (err) {
    throw Error();
  }
};

const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (err) {
    throw Error();
  }
};
export { getUsers, getUserByEmail };
