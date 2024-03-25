import { User } from "../../interface"

export default async function userRegister(userItem:User){
   const response = await fetch('https://coworking-reservation-app-isamare.vercel.app/api/project/auth/register',{
      method: "POST",
      headers: {
         "Content-type":"application/json"
    },
    body: JSON.stringify({
      name: userItem.name,
      email: userItem.email,
      password: userItem.password,
      telephone:userItem.telephone,
      
    })
   })
   if(!response.ok){
      throw new Error("Cannot post booking")
   }
   

   return await response.json()
}