
import getCoworkings from "@/libs/getCoworkings"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import HospitalCatalog from "@/components/CoworkingCatalog"



export default function Hospital(){

   const  coworkings = getCoworkings()


   return (
      <main className="text-center p-5">
         <h1 className="text-xl font-medium">Select Your Travel Partner</h1>
         <Suspense fallback={<p>Looding...<LinearProgress/></p>}>
            <HospitalCatalog coworkingsJson={coworkings}/>
         </Suspense>
      </main>
   )
}