'use client'
import styles from './banner.module.css'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react' 
// import { useSession } from 'next-auth/react'

export default function Banner(){
   return (
      <div className='block w-[100vw] h-[75vh] relation '>
         <Image src = {'/img/cover1.png'}
         alt='cover'
         fill={true}
         className='object-cover rounded-t-lg'
         priority/>
         {/* <button className='bg-gradient-to-r from-white to-white text-black font-extrabold text-xl pt-3 pb-3 pr-9 pl-9 rounded-3xl z-20 absolute bottom-20 inset-x-[40%]
               hover:from-[#D6C2A9] hover:via-white hover:to-[#D6C2A9]  hover:border-transparent'
               // onClick={(e)=>{ e.stopPropagation(); router.push('/hospital')}}
               >
               Login
         </button> */}
      </div>
      
      
   )
} 