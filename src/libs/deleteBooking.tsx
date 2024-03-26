import { BookingItem2 } from "../../interface"

export default async function deleteBooking(token: string, bookingId: string){
   
    const response = await fetch(`${process.env.BACKEND_URL}/api/project/reservations/${bookingId}`,{
       method: "DELETE",
       headers: {
            authorization: `Bearer ${token}`,
       },
    })
    
    if(!response.ok){
        throw new Error("Failed to delete booking")
    }

    return await response.json()
 }