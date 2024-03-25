export default async function userLogIn(userEmail:string,userPassword:string){
   const response = await fetch("https://coworking-reservation-app-isamare.vercel.app/api/project/auth/login",{
      method: "POST",
      headers: {
         "Content-type":"application/json",
      },
      body: JSON.stringify({
         email: userEmail,
         password: userPassword
      }),
   })
   if(!response.ok){
      throw new Error("Failed to log-in")
   }
   return await response.json()
}