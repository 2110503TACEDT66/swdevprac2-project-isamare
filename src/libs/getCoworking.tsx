
export default async function getCoworking(id:string) {

   const response = await fetch(`https://coworking-reservation-app-isamare.vercel.app/api/project/coworkings/${id}`)
   if(!response.ok){
      throw new Error("Failed to fetch coworking")
   }
   return await response.json()
}