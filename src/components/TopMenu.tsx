import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'
import UserMenu from './UserMenu'

export default async function TopMenu(){
   const session = await getServerSession(authOptions)

   return (
      <div className='h-[146px] w-auto bg-white fixed top-0 left-0 right-0 z-30 border-b border-solid border-lightgray-200 border-t-1 border-solid border-lightgray-100 flex flex-row justify-between'>
         <Image src={'/img/logo.png'} className='w-[160px] ml-5 mt-auto mb-auto' alt='logo'
         width={0} height={0} sizes='100vh'/>
         <div className='w-auto mt-auto mb-auto mr-5'>
            <TopMenuItem title='Home' pageRef='/'/>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <TopMenuItem title='About Us' pageRef='/about'/>
         </div>
         {
            session?<div><Image src={'/img/userlogo.png'} className='h-[40%] mt-11 w-auto mr-3 mb-auto' 
            alt='logo' width={0} height={0} sizes='100vh'/></div>
            :<TopMenuItem title='Sign in' pageRef='/api/auth/signin'/>
         }
      </div>
   )
}