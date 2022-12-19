import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... your Prisma Client queries will go here
  const newUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: {
          title: "Hello World",
        },
      },
    },
  });
  console.log("Created new user: ", newUser);

  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });
  console.log("All users: ");
  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
