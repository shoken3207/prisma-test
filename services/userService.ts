import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type User = { id: number; email: string; name: string; createdAt: Date };

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

const getUserById = async (id: number): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (err) {
    throw Error();
  }
};

const createUser = async (
  email: string,
  name: string
): Promise<User | null> => {
  try {
    const user = await prisma.user.create({ data: { email, name } });
    return user;
  } catch (err) {
    throw Error();
  }
};

const updateUser = async (
  id: number,
  email: string,
  name: string
): Promise<User | null> => {
  try {
    const user = await prisma.user.update({
      data: { email, name },
      where: { id },
    });
    return user;
  } catch (err) {
    throw Error();
  }
};

const deleteUser = async (id: number): Promise<void> => {
  try {
    await prisma.user.delete({
      where: { id },
    });
  } catch (err) {
    throw Error();
  }
};
export {
  getUsers,
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
