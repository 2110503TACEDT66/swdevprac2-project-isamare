import { useSession } from "next-auth/react"

export default async function getCoworkings() {
    const {data: session} = useSession()

   const response = await fetch(`https://coworking-reservation-app-isamare.vercel.app/api/project/reservations?${session?.user.token}`)
   if(!response.ok){
      throw new Error("Failed to fetch coworkings")
   }
   return await response.json()
}