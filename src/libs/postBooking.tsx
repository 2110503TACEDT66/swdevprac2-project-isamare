import { BookingItem } from "../../interface"

export default async function postBooking(token: string, bookingItem: BookingItem){
   
    const response = await fetch(`${process.env.BACKEND_URL}/api/project/coworkings/${bookingItem.coworkingId}/reservations`,{
       method: "POST",
       headers: {
            "Content-type":"application/json",
            authorization: `Bearer ${token}`,
       },
       body: JSON.stringify({
        apptDate: bookingItem.bookDate,
        start: bookingItem.start,
        end: bookingItem.end
     }),
    })
    
    if(!response.ok){
      return await response.json()
    }

    return await response.json()
 }