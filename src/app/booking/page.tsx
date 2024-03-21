import { Select,MenuItem, TextField } from "@mui/material"


export default async function BookingPage(){
   return (
      <main className="flex flex-col items-center  text-center justify-center">
         <div className="bg-white shadow-lg items-center space-y-4  p-6 flex flex-col justify-center w-[60%]  hover:shadow-2xl rounded-md mt-3">
            <h1 className="text-center font-sans text-5xl font-bold text-[#252645]">New Booking</h1>

               <form className=" items-center space-y-3 flex flex-col justify-center w-full ">
                  <div>Co-working Space</div>
                  <Select  variant="standard" id="hospital" className="h-[2em] w-[200px] w-full">
                     <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
                     <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
                     <MenuItem value='Thammasat'>Thammasat University Hospital</MenuItem>
                  </Select>
                  <div>Date - Time</div>
                  <Select  variant="standard" id="hospital" className="h-[2em] w-[200px] w-full">
                     <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
                     <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
                     <MenuItem value='Thammasat'>Thammasat University Hospital</MenuItem>
                  </Select>
                    
            </form>
            <button name="Book Vaccine" className="block w-[60%] rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-3 text-xl
               text-white shadow-sm">
                  Book Vaccine
               </button>
            </div>
      </main>
   )
   


}