import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
async function main() {
  try {
    const result = await prisma.user.create({
      data: {
        name: "Subahan Islam",
        email: "subahanislam523@gmail.com",
      },
    });
    console.log(" User created successfully:", result);
  } catch (error) {
    console.error(" Error details:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();