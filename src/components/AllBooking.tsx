import Link from "next/link"
import { BookingItem2, BookingJson } from "../../interface"

export default async function AllBooking({bookingsJson}:{bookingsJson:Promise<BookingJson>}){

   const bookingsJsonReady = await bookingsJson

   return(
      <>
      You have {bookingsJsonReady.count} bookings
      <div className="flex min-h-full w-auto flex-1 flex-col justify-center rounded-3xl px-6 py-12 md:px-15 md:mx-20 lg:mx-[200px]">
            {
               bookingsJsonReady.data.map((BookingItem2:BookingItem2)=>(
                <div className="bg-white p-5 rounded-3xl drop-shadow-xl w-auto" key={BookingItem2.createAt}>
                <div className="text-xl">Reserve at {BookingItem2.coworking?.name}</div>
                <div className="text-md">From {BookingItem2.start} to {BookingItem2.end}</div>
                <div className="text-md">Date {BookingItem2.apptDate.split('T')[0]}</div>
                <div className="text-md">By {BookingItem2.user}</div>
                <button className="block rounded-md bg-black hover:bg-indigo-900 px-3 py-2 text-white shadow-sm right-5 bottom-5"
                >Remove this</button>
            </div>
               ))
            }
      </div>
      </>
   )
}