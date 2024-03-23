export default async function getUserProfile(token:string){
   
   const response = await fetch("https://coworking-reservation-app-isamare.vercel.app/api/project/auth/me",{
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