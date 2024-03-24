import Card from "./Card"
import Link from "next/link"
import { CoworkingItem,CoworkingJson } from "../../interface"

export default async function CoworkingCatalog({coworkingsJson}:{coworkingsJson:Promise<CoworkingJson>}){

   const coworkingsJsonReady = await coworkingsJson

   return(
      <>
      Explore {coworkingsJsonReady.count} model in our Coworking
      <div className="flex flex-row flex-wrap m-5  justify-around content-around">
            {
               coworkingsJsonReady.data.map((CoworkingItem:CoworkingItem)=>(
                  <Link href={`/coworking/${CoworkingItem.id}`} className="w-1/5">
                     <Card hospitalName={CoworkingItem.name} imgSrc={CoworkingItem.picture} />
                  </Link>
               ))
            }
      </div>
      </>
   )
}