
export default async function getCoworking(id:string) {

   // await new Promise( (resolve)=> setTimeout(resolve,1000))

   const response = await fetch(`https://coworking-reservation-app-isamare.vercel.app/api/project/coworkings/${id}`)
   if(!response.ok){
      throw new Error("Failed to fetch coworking")
   }
   return await response.json()
}