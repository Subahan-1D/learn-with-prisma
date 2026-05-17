import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function others() {
    // create some user data  / some user data

    // const result = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Rakib Hasan",
    //             email: "rakib1@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=1",
    //         },
    //         {
    //             name: "Sakib Ahmed",
    //             email: "sakib2@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Nusrat Jahan",
    //             email: "nusrat3@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=3",
    //         },
    //         {
    //             name: "Tanvir Islam",
    //             email: "tanvir4@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Mehedi Hasan",
    //             email: "mehedi5@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=5",
    //         },
    //         {
    //             name: "Jannatul Ferdous",
    //             email: "jannat6@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Hasib Rahman",
    //             email: "hasib7@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=7",
    //         },
    //         {
    //             name: "Farzana Akter",
    //             email: "farzana8@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Nayeem Hossain",
    //             email: "nayeem9@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=9",
    //         },
    //         {
    //             name: "Rifat Karim",
    //             email: "rifat10@gmail.com",
    //             profilePhoto: null,
    //         },

    //         {
    //             name: "Afsana Mimi",
    //             email: "afsana11@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=11",
    //         },
    //         {
    //             name: "Imran Khan",
    //             email: "imran12@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Sabbir Ahmed",
    //             email: "sabbir13@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=13",
    //         },
    //         {
    //             name: "Tania Akter",
    //             email: "tania14@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Shuvo Das",
    //             email: "shuvo15@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=15",
    //         },
    //         {
    //             name: "Riya Islam",
    //             email: "riya16@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Mithun Roy",
    //             email: "mithun17@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=17",
    //         },
    //         {
    //             name: "Nadia Khan",
    //             email: "nadia18@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Arif Hossain",
    //             email: "arif19@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=19",
    //         },
    //         {
    //             name: "Priya Sultana",
    //             email: "priya20@gmail.com",
    //             profilePhoto: null,
    //         },

    //         {
    //             name: "Shakil Ahmed",
    //             email: "shakil21@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=21",
    //         },
    //         {
    //             name: "Tamim Iqbal",
    //             email: "tamim22@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Mim Akter",
    //             email: "mim23@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=23",
    //         },
    //         {
    //             name: "Sohel Rana",
    //             email: "sohel24@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Mahin Chowdhury",
    //             email: "mahin25@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=25",
    //         },
    //         {
    //             name: "Jui Akter",
    //             email: "jui26@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Fahim Rahman",
    //             email: "fahim27@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=27",
    //         },
    //         {
    //             name: "Sadia Islam",
    //             email: "sadia28@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Ashikur Rahman",
    //             email: "ashik29@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=29",
    //         },
    //         {
    //             name: "Toma Akter",
    //             email: "toma30@gmail.com",
    //             profilePhoto: null,
    //         },

    //         {
    //             name: "Rezaul Karim",
    //             email: "reza31@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=31",
    //         },
    //         {
    //             name: "Mou Islam",
    //             email: "mou32@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Saif Hasan",
    //             email: "saif33@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=33",
    //         },
    //         {
    //             name: "Oishi Rahman",
    //             email: "oishi34@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Rasel Ahmed",
    //             email: "rasel35@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=35",
    //         },
    //         {
    //             name: "Lamia Jahan",
    //             email: "lamia36@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Nahid Hasan",
    //             email: "nahid37@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=37",
    //         },
    //         {
    //             name: "Sonia Akter",
    //             email: "sonia38@gmail.com",
    //             profilePhoto: null,
    //         },
    //         {
    //             name: "Rony Hossain",
    //             email: "rony39@gmail.com",
    //             profilePhoto: "https://i.pravatar.cc/150?img=39",
    //         },
    //         {
    //             name: "Mitu Sultana",
    //             email: "mitu40@gmail.com",
    //             profilePhoto: null,
    //         },
    //     ],

    // })
    // console.log(" Created user:", result);

    // retrieve all data

    const retrieveUserData = await prisma.user.findMany({
        orderBy: {
            id: "desc"
        }
    })
    console.log(" Retrieved user data:", retrieveUserData);
}
others()