import { BookingItem2 } from "../../interface"

export default async function deleteBooking(token: string, bookingItem2: BookingItem2){
   
    const response = await fetch(`https://coworking-reservation-app-isamare.vercel.app/api/project/reservations/${bookingItem2._id}`,{
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