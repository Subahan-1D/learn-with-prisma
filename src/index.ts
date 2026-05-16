import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
async function main() {
  try {
    // const result = await prisma.user.create({
    //   data: {
    //     name: "subahan",
    //     email: "subahanislam523@gmail.com",
    //     profilePhoto:"https://ibb.co.com/xK4gS5s4"
    //   },
    // });
    // const userData = await prisma.user.findMany({
    //   where : {
    //    name:"subahan"
    //   }
    // });
    // console.log(" User data:", userData);

    // const findUserById = await prisma.user.findUnique({
    //   where :{
    //     id:1
    //   }
    // });
    const findUserById = await prisma.user.findFirstOrThrow({
      where :{
        id:7 }
    });
    console.log(" User data find By id:", findUserById);
  } catch (error) {
    console.error(" Error details:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();