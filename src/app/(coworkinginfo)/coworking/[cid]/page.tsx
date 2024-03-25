import getCoworking from "@/libs/getCoworking"
import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function CoworkingDetailPage({params}:{params:{cid:string}}){

   const coworkingDetail = await getCoworking(params.cid)
   const session = await getServerSession(authOptions)
   
   return(
      <main className="p-5">
         <div className="bg-white flex min-h-full w-auto flex-1 flex-col justify-center rounded-3xl px-6 py-12 md:px-15 md:mx-20">
            <h1 className="text-lg font-bold text-[#252645] mb-4">Coworking ID {params.cid}</h1>
            
            <hr className="border-gray-300 mt-1" />
         
            <div className="flex flex-wrap my-5">
               <Image src={coworkingDetail.data.picture}
                  alt="Coworking Image"
                  width={0} height={0} sizes="100vw"
                  className="rounded-lg w-[30%] "
               />
               <div className="text-md mx-5 text-left">{ coworkingDetail.data.description }
                  <div className="text-md mx-5">{ coworkingDetail.data.name }</div>
                  <div className="text-md mx-5">{ coworkingDetail.data.address } { coworkingDetail.data.district} { coworkingDetail.data.province} { coworkingDetail.data.region} { coworkingDetail.data.postalcode} </div>
                  <div className="text-md mx-5">{ coworkingDetail.data.telephone }</div>
                  <div className="text-md mx-5">{ coworkingDetail.data.opentime } - {coworkingDetail.data.closetime}</div>
                  {session?
                     <Link href={`/booking?id=${params.cid}&name=${coworkingDetail.data.name}`}>
                        <button className="block rounded-md bg-lime-700 hover:bg-lime-900 px-3 py-2 text-white shadow-sm">Make Reservation</button>
                     </Link>:<Link href={`/login`}>
                        <button className="block rounded-md bg-lime-700 hover:bg-lime-900 px-3 py-2 text-white shadow-sm">Log in to make Reservation</button>
                     </Link>
                  }
               </div>
            </div>

         </div>
         
      </main>
   )
}