import { resolve } from "path"

export default async function getCoworkings() {

   const response = await fetch("https://coworking-reservation-app-isamare.vercel.app/api/project/coworkings")
   if(!response.ok){
      throw new Error("Failed to fetch coworkings")
   }
   return await response.json()
}