
export default async function getCoworking(id:string) {

   const response = await fetch(`${process.env.BACKEND_URL}/api/project/coworkings/${id}`)
   if(!response.ok){
      throw new Error("Failed to fetch coworking")
   }
   return await response.json()
}