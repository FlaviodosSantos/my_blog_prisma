import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... your Prisma Client queries will go here
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
