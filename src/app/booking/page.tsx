'use client'
import { Select,MenuItem, TextField } from "@mui/material"


export default function BookingPage(){
   return (
      <main className="flex justify-center mt-10">
         <div className="text-center font-extrabold text-xl text-[#252645]">New Booking</div>
         <div className="text-left">Co-working Space</div>
         <div className="bg-white shadow-lg space-y-4  flex flex-col w-[80%] rounded-lg mt-3 py-6 px-6 justify-center items-center relative">
            
            
            <form className="w-[70%]  ">
               <Select variant="standard" id="hospital" className="h-[2em] w-[200px] w-full">
               <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
                     <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
                     <MenuItem value='Thammasat'>Thammasat University Hospital</MenuItem>
               </Select>
            </form>
         </div>
            
      </main>
   )
   


}