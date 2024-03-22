import { resolve } from "path"

export default async function getCoworkings() {

   const response = await fetch("http://localhost:5000/api/project/coworkings")
   if(!response.ok){
      throw new Error("Failed to fetch coworkings")
   }
   return await response.json()
}