export default async function getBookings(token:string) {
   const response = await fetch("https://coworking-reservation-app-isamare.vercel.app//api/project/reservations", {
      method: "GET",
      headers: {
         authorization: `Bearer ${token}`,
      }
   })

   if(!response.ok){
      throw new Error("Failed to fetch bookings")
   }
   return await response.json()
}