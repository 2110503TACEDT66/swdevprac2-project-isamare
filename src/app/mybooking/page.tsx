'use client'
import Link from "next/link"
import { BookingItem2, BookingJson } from "../../../interface"
import AllBooking from "@/components/AllBooking"
import getBookings from "@/libs/getBookings"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import deleteBooking from "@/libs/deleteBooking";
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"

export default  function MyBooking() {
    const router = useRouter();
    
    
    
      const {data: session} = useSession()
    if (!session || !session.user.token) return null
    
    const bookings = getBookings(session.user.token)
    
    return (
        <main>
            <AllBooking bookingsJson={bookings}/>
        </main>
    )
}