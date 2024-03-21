'use client'
import styles from './banner.module.css'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react' 
// import { useSession } from 'next-auth/react'

export default function Banner(){
   


   return (
      <div className='block p-[5px] mt-146 w-[100vw] h-[90vh] relation '>
         <Image src = {'/img/cover1.jpg'}
         alt='cover'
         fill={true}
         className='object-cover rounded-t-lg'
         priority/>
         <button className='items-center bottom-20 bg-gradient-to-r from-white to-white text-black font-bold text-center pt-3 pb-3 pr-9 pl-9 rounded-3xl z-30 absolute 
               hover:from-[#D6C2A9] hover:via-white hover:to-[#D6C2A9]  hover:border-transparent'
               // onClick={(e)=>{ e.stopPropagation(); router.push('/hospital')}}
               >
               Login
         </button>
      </div>
      
      
   )
} 