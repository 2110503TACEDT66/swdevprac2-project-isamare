'use client'
import { Select,MenuItem, TextField } from "@mui/material"


export default function LoginPage(){
   return(
      <main>
         <div className="block shadow-lg mx-[10%] p-2 rounded-lg bg-white">
            <div>Login</div>
            <div>
               <div>Email</div>
               <TextField name="Email" label="Email" variant="standard" className="w-full "/>
            </div>
            <div>
               <div>Password</div>
               <TextField name="Password" label="Password" variant="standard" className="w-full "/>
            </div>
         </div>
      </main>
   )
}