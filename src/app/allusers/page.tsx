import Link from "next/link"
import { BookingItem2, BookingJson } from "../../../interface"
import AllBooking from "@/components/AllBooking"
import getBookings from "@/libs/getBookings"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import deleteBooking from "@/libs/deleteBooking";
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"
import getAllUsers from "@/libs/getAllUser"
import AllUsers from "@/components/AllUsers"

export default async function MyBooking() {
    
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null
    
    const users = getAllUsers(session.user.token)
    
    return (
        <main>
            <AllUsers usersJson={users}/>
        </main>
    )
}