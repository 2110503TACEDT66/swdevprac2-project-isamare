import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
// import { Link } from '@mui/material'

export default async function TopMenu(){
   // const session = await getServerSession(authOptions)

   return (
      <div className='h-[146px] bg-white fixed top-0 left-0 right-0 z-30 border-b border-solid border-lightgray-200 border-t-1 border-solid border-lightgray-100 flex flex-row justify-center '>
         {/* <TopMenuItem title='Coworking' pageRef='/' /> */}
         <Image src={'/img/logo.png'} className='w-[160px] text-center mr-auto ml-auto mt-auto mb-auto' alt='logo'
         width={0} height={0} sizes='100vh'/>
         {/* {
            session?<Link href="/api/auth/signout"> 
            <div className='flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm'>
               Sign-Out</div></Link>
            :<Link href="/api/auth/signin"><div className='flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm'>Sign-In</div></Link>

         } */}
      </div>
   )
}