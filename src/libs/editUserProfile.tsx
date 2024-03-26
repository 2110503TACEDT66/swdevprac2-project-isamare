import { User, UserUpdate } from "../../interface"

export default async function editUserProfile(token: string,userId: string,userUpdate:UserUpdate){
   const response = await fetch('https://coworking-reservation-app-isamare.vercel.app/api/project/auth/updateMe',{
      method: "PUT",
      headers: {
         authorization: `Bearer ${token}`,
         "Content-type":"application/json"
    },
    body: JSON.stringify({
      name: userUpdate.name,
      email: userUpdate.email,
      telephone:userUpdate.telephone,
      
    })
   })
   if(!response.ok){
      return await response.json()
   }
   

   return await response.json()
}