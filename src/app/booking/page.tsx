'use client'

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface"
import { addBooking } from "@/redux/features/bookingSlice";
import { useSession } from "next-auth/react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import postBooking from "@/libs/postBooking";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default function Booking() {
    const {data: session} = useSession()
    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const user = session?.user._id
    const name = urlParams.get('name')

    const dispatch = useDispatch<AppDispatch>()
    const [hasBooked, setHasBooked] = useState(false)

    const book = async () => {
        if (cid && name && user && bookDate &&  start && end) {
            const item:BookingItem = {
               coworkingId: cid,
               coworkingName: name,
               bookDate: dayjs(bookDate).format("YYYY/MM/DD"),
               start: dayjs(start).format('HH:mm:ss'),
               end: dayjs(end).format('HH:mm:ss'),
               userId: user
            }
            console.log(item)
            
            const booking = await postBooking(session.user.token, item);
            console.log("Booking result:", booking);
            if (booking.success == true) {
                setHasBooked(true)
                

            }
            else if (booking.success == false) {
                alert(booking.message)
            }
        }
    }

    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [start, setStart] = useState<string|null>(null)
    const [end, setEnd] = useState<string|null>(null)

    return (
        <main className="mt-8">
            <div className="bg-white  min-h-full w-auto rounded-3xl m-8 px-16 py-12 md:px-15 md:mx-20 relative ">
            <div className="text-3xl  font-bold text-center mb-6 text-[#252645]">New Booking</div>

            <hr className="bg-gray-200 border-1 mb-6" />
            
            
            <div className="text-xl font-medium text-center">Coworking space: {name}</div>
                
                <div className="flex flex-wrap  justify-center  my-5 relative mb-8">
                    <div className=" space-y-2 ">
                        <div className="text-md text-left text-gray-600 ">Choose Date to Book</div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className="bg-white w-[300px]"
                            value={bookDate} onChange={(value)=>{setBookDate(value)}}/>
                        </LocalizationProvider>
                        <div className="text-md text-left text-gray-600">Start</div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker className="bg-white w-[300px]" value={start} onChange={(newValue) => {setStart(newValue)}}/>
                        </LocalizationProvider>
                        <div className="text-md text-left text-gray-600">End</div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker className="bg-white w-[300px]" value={end} onChange={(newValue) => {setEnd(newValue)}}/>
                        </LocalizationProvider>
                    </div>
                    
                </div>
                {
                        hasBooked?<Link href={'/mybooking'}><button className="block m-auto rounded-md px-8 py-2 font-semibold text-white shadow-sm bg-[#252645] bg-gradient-to-r hover:from-[#252645] hover:to-[#5C5EAB]">View My Booking</button></Link>:<button className="block m-auto rounded-md px-8 py-2 font-semibold text-white shadow-sm bg-[#252645] bg-gradient-to-r hover:from-[#252645] hover:to-[#5C5EAB]" onClick={book}>Book This</button>
                    }
            </div>
        </main>
    );
}