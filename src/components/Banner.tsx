'use client'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";


export default function Banner(){
   
   return (
      <div className='block p-[5px] m-0 w-[100vw] h-[90vh] relative'>
         <Image src = {'/img/cover1.png'}
         alt='cover'
         fill={true}
         className='object-cover rounded-t-lg'
         priority/>
         
      </div>
      
   )
} 