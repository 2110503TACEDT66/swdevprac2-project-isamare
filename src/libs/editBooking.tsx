

export default async function editBooking(token: string,bookingId: string){
   const response = await fetch(`https://coworking-reservation-app-isamare.vercel.app/api/project/reservations/${bookingId}`,{
       method: "UPDATE",
       headers: {
            authorization: `Bearer ${token}`,
       },
    })
    
    if(!response.ok){
        throw new Error("Failed to delete booking")
    }

    return await response.json()
}