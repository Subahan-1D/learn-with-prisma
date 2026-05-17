import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
async function main() {
  try {
    // const result = await prisma.user.create({
    //   data: {
    //     name: "subahan ali",
    //     email: "subahanislami@gmail.com",
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

    // const findUserById = await prisma.user.findFirstOrThrow({
    //   where :{
    //     id:7 }
    // });
    // console.log(" User data find By id:", findUserById);


    // update user data
    // const updateUserData = await prisma.user.update({
    //   where: {
    //     id: 1
    //   },
    //   data: {
    //     name: "subahan islam"
    //   }
    // })
    // console.log(" Updated user data:", updateUserData);
    // const userallData = await prisma.user.findMany();
    // console.log(" All user data:", userallData);
    // const updateManyUserData = await prisma.user.updateMany({
    //   where: {
    //     profilePhoto: null
    //   },
    //   data: {
    //     profilePhoto: "https://example.com/default-profile-photo.jpg"
    //   }
    // });

    // const updateManyUserData = await prisma.user.updateManyAndReturn({
    //   where: {
    //     id: {
    //       gt: 2
    //     }
    //   },
    //   data: {
    //     profilePhoto: "https://example.com/default-profile-photo.jpg"
    //   }
    // })
    // console.log(" Updated many user data:", updateManyUserData);


    // delete user data
    // const deleteUser = await prisma.user.delete ({
    //   where :{
    //     id:3
    //   },
    // })
    // console.log(" Deleted user data:", deleteUser);
    // console.log(await prisma.user.findMany());
  } catch (error) {
    console.error(" Error details:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();