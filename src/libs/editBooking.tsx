import { BookingItemEdit } from "../../interface"


export default async function editBooking(token: string,bookingId: string, apptDate:string,start:string,end:string){
   const response = await fetch(`https://coworking-reservation-app-isamare.vercel.app/api/project/reservations/${bookingId}`,{
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
        throw new Error("Failed to delete booking")
    }

    return await response.json()
}