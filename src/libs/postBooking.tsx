import { BookingItem } from "../../interface"

export default async function postBooking(token: string, bookingItem: BookingItem){
   
    const response = await fetch(`https://coworking-reservation-app-isamare.vercel.app/api/project/coworkings/${bookingItem.coworkingId}/reservations`,{
       method: "POST",
       headers: {
            "Content-type":"application/json",
            authorization: `Bearer ${token}`,
       },
       body: JSON.stringify({
        apptDate: bookingItem.bookDate,
        /*user: bookingItem.userId,
        coworking: bookingItem.coworkingId,*/
        start: bookingItem.start,
        end: bookingItem.end
     }),
    })
    
    if(!response.ok){
       throw new Error("Cannot post booking")
    }

    return await response.json()
 }