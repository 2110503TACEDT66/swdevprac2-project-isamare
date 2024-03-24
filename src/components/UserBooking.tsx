/*'use client'
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookingSlice"

export default function UserBooking() {

    const bookingItems = useAppSelector((state)=>state.bookingSlice.bookingItems)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
        {
            bookingItems.map((bookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.coworkingId + bookingItem.bookDate}>
                    <div className="text-xl">Book {bookingItem.coworkingName}</div>
                    <div className="text-sm">From {bookingItem.start} to {bookingItem.end}</div>
                    <div className="text-md">Date {bookingItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                    onClick={()=>{dispatch(removeBooking(bookingItem))}}>Remove this</button>
                </div>
            ))
        }
        </>
    )
}*/