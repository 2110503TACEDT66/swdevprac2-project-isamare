import { User } from "../../interface"

export default async function userRegister(User:User){
   const response = await fetch(`https://coworking-reservation-app-isamare.vercel.app/api/project/coworkings//reservations`,{

      method: "POST",
      headers: {
         "Content-type":"application/json"
    },
    body: JSON.stringify({
      name: User.name,
    })


   })


}