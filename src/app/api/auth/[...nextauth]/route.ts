import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogIn from "@/libs/userLogIn";

export const authOptions:AuthOptions = {
   providers:[
      //Authentication Provider, use Credentials Provider
      CredentialsProvider({
         
         name: "Credentials",

         credentials: {
           email: { label: "Email", type: "email", placeholder: "email" },
           password: { label: "Password", type: "password" }
         },
         async authorize(credentials,req) {
          
          if(!credentials) return null
          const user = await userLogIn(credentials.email,credentials.password)

          
           if (user) {
             // Any object returned will be saved in `user` property of the JWT
             return user
           } else {
             // If you return null then an error will be displayed advising the user to check their details.
             return null
     
             // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
           }
         }
       })
   ],
   session:{ strategy:"jwt"},
   callbacks:{
    session({session,token,user}){
          session.user = token as any
          return session
      },
      jwt({token,user}){
          return{...token,...user}
      }

   }
}
const handler = NextAuth(authOptions)
export{handler as GET,handler as POST}