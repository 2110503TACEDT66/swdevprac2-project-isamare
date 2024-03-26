export default async function getAllUsers(token:string) {
   const response = await fetch(`${process.env.BACKEND_URL}/api/project/auth/getallusers`, {
      method: "GET",
      headers: {
         authorization: `Bearer ${token}`,
      }
   })

   if(!response.ok){
     return await response.json()
   }
   return await response.json()
}