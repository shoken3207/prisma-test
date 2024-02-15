import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const admin = await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      email: "admin@gmail.com",
      name: "admin",
    },
  });
  console.log("admin: ", admin);
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
