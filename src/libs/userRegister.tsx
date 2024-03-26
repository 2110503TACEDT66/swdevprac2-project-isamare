import { User } from "../../interface"

export default async function userRegister(userItem:User){
   const response = await fetch(`${process.env.BACKEND_URL}/api/project/auth/register`,{
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
      return await response.json()
   }
   

   return await response.json()
}

