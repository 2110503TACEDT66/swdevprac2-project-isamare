import NextAuth from "next-auth/next" ;

declare module "next-auth" {
   interface Session {
      user: {
         _id:string,
         name:string,
         email:string,
         tel: string,
         role: string,
         token: string
      }
   }
}