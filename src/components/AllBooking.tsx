import Link from "next/link"
import { BookingItem2, BookingJson } from "../../interface"

export default async function AllBooking({bookingsJson}:{bookingsJson:Promise<BookingJson>}){

   const bookingsJsonReady = await bookingsJson

   return(
      <>
      You have {bookingsJsonReady.count} bookings
      <div className="flex flex-row flex-wrap m-5  justify-around content-around">
            {
               bookingsJsonReady.data.map((BookingItem2:BookingItem2)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={BookingItem2.createAt}>
                <div className="text-xl">Reserve at {BookingItem2.coworking.name}</div>
                <div className="text-md">From {BookingItem2.start} to {BookingItem2.end}</div>
                <div className="text-md">Date {BookingItem2.apptDate.split('T')[0]}</div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                >Remove this</button>
            </div>
               ))
            }
      </div>
      </>
   )
}