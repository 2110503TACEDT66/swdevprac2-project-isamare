import getCoworking from "@/libs/getCoworking"
import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function CoworkingDetailPage({params}:{params:{cid:string}}){

   const coworkingDetail = await getCoworking(params.cid)
   const session = await getServerSession(authOptions)
   /**
    * Mock Data for Demontration
    */
   // const mockHospitalRepo = new Map()
   // mockHospitalRepo.set("001",{name: "Chulalongkorn Hospital",image: "/img/chula.jpg"})
   // mockHospitalRepo.set("002",{name: "Rajavithi Hospital",image: "/img/rajavithi.jpg"})
   // mockHospitalRepo.set("003",{name: "Thammasat University Hospital",image: "/img/thammasat.jpg"})


   return(
      <main className="text-center p-5">
         <h1 className="text-lg font-medium">Hospital ID {params.cid}</h1>
         <div className="flex flex-row my-5">
            <Image src={coworkingDetail.data.picture}
               alt="Car Image"
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
                </Link>:<div>log in first</div>
}
            </div>
         </div>
      </main>
   )
}

// export async function generateStaticParams() {
//    return [{hid:'001'},{hid:'002'},{hid:'003'}]
// }