'use client'
import Image from 'next/image'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";


export default async function Banner(){

   //get name
   /*const session = await getServerSession(authOptions)
   if (!session || !session.user.token) return null

   const profile = await getUserProfile(session.user.token)*/
   
   return (
      <div className='block p-[5px] m-0 w-[100vw] h-[90vh] relative'>
         <Image src = {'/img/cover1.png'}
         alt='cover'
         fill={true}
         className='object-cover rounded-t-lg'
         priority/>
         
         {/*
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>
                Welcome{profile.data.name}</div> : null
         */}
         {/* <button className='bg-gradient-to-r from-white to-white text-black font-extrabold text-xl pt-3 pb-3 pr-9 pl-9 rounded-3xl z-20 absolute bottom-20 inset-x-[40%]
               hover:from-[#D6C2A9] hover:via-white hover:to-[#D6C2A9]  hover:border-transparent'
               // onClick={(e)=>{ e.stopPropagation(); router.push('/hospital')}}
               >
               Login
         </button> */}
      </div>
      
   )
} 