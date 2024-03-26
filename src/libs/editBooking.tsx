import { BookingItemEdit } from "../../interface"


export default async function editBooking(token: string,bookingId: string, apptDate:string,start:string,end:string){
   const response = await fetch(`${process.env.BACKEND_URL}/api/project/reservations/${bookingId}`,{
      cache: "no-store",
       method: "PUT",
       headers: {
         "Content-type":"application/json",
         authorization: `Bearer ${token}`,
       },body: JSON.stringify({
         apptDate,
         start,
         end
      }),
    })
    
    if(!response.ok){
      return await response.json()
    }

    return await response.json()
}