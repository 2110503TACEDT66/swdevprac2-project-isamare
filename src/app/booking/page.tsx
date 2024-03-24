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

export default function Booking() {
    const {data: session} = useSession()
    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const user = session?.user._id
    const name = urlParams.get('name')

    const dispatch = useDispatch<AppDispatch>()

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
            try {
               const booking = await postBooking(session.user.token, item);
               console.log("Booking result:", booking);
               // Dispatch any action if needed
           } catch (error) {
               console.error("Error occurred while booking:", error);
               // Handle error as needed
           }
        }
    }

    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [start, setStart] = useState<string|null>(null)
    const [end, setEnd] = useState<string|null>(null)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Booking</div>
            <div className="text-xl font-medium">Coworking space: {name}</div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Choose Date to Book</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={bookDate} onChange={(value)=>{setBookDate(value)}}/>
               </LocalizationProvider>
                <div className="text-md text-left text-gray-600">Start</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
               <TimePicker className="bg-white" value={start} onChange={(newValue) => {setStart(newValue)}}/>
               </LocalizationProvider>
                <div className="text-md text-left text-gray-600">End</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
               <TimePicker className="bg-white" value={end} onChange={(newValue) => {setEnd(newValue)}}/>
               </LocalizationProvider>
            </div>
            <button className="block rounded-md bg-lime-700 hover:bg-lime-900 px-3 py-2 text-white shadow-sm" onClick={book}>Book</button>
        </main>
    );
}