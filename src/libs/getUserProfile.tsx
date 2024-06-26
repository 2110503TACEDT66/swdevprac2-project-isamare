export default async function getUserProfile(token:string){
   
   const response = await fetch(`${process.env.BACKEND_URL}/api/project/auth/me`,{
      cache: "no-store",
      method: "GET",
      headers: {
         authorization: `Bearer ${token}`,
      }
   })
   
   if(!response.ok){
      throw new Error("Cannot get user profile")
   }
   return await response.json()
}