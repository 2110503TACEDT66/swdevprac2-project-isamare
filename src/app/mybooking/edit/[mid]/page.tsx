'use client'

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookingSlice";
import { useSession } from "next-auth/react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import postBooking from "@/libs/postBooking";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import deleteBooking from "@/libs/deleteBooking";
import Link from "next/link";

export default function EditBookingPage({params}:{params:{mid:string}}) {
   const {data: session} = useSession()
   if (!session || !session.user.token) return null
   const urlParams = useSearchParams()
   const cid = urlParams.get('id')
   const user = session?.user._id
   const name = urlParams.get('name')
   
   
   const [hasEdit, setHasEdit] = useState(false)

   const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [start, setStart] = useState<string|null>(null)
    const [end, setEnd] = useState<string|null>(null)
   return(
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
                <button className="block m-auto rounded-md px-8 py-2 font-semibold text-white shadow-sm bg-[#252645] bg-gradient-to-r hover:from-[#252645] hover:to-[#5C5EAB]" >
                    {
                        hasBooked?'Booked':'Book This'
                    }
                </button>
            </div>
        </main>
   )
}