//Autogenerated Client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

//Insert function::
const insertData = async(email:string,password:string,firstName:string,lastName:string)=>{
  const res = await  prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            email:true,
            firstName:true
        }
    })
    console.log(res)
}
// insertData("johnnysins@gmail.com","Jsin","Johnny","Sins")

interface UpdateParams{
    firstName:string,
    lastName:string
}
//Update 
const updateData = async(email:string,{firstName,lastName}:UpdateParams)=>{
    const res = await prisma.user.update({
        where:{
            email:email
        },
        data:{
            firstName,
            lastName
        }
    })
    console.log(res)
}
// updateData("marathesameer15@gmail.com",{firstName:"Marathe",lastName:"Sameer"})

//get user details
const getData = async()=>{
    const res = await prisma.user.findMany({
        select:{
            id:true,
            firstName:true,
            lastName:true
        }
    })
    console.log(res)
}
getData()