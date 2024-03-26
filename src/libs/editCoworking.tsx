import { CoworkingItemCreate } from "../../interface"


export default async function editCoworking(token: string,coworkingId: string, coworkingItemCreate:CoworkingItemCreate){
   const response = await fetch(`${process.env.BACKEND_URL}/api/project/coworkings/${coworkingId}`,{
       method: "PUT",
       headers: {
         "Content-type":"application/json",
         authorization: `Bearer ${token}`,
       },body: JSON.stringify({
         name:coworkingItemCreate.name,
         address:coworkingItemCreate.address,
         district:coworkingItemCreate.district,
         province:coworkingItemCreate.province,
         postalcode:coworkingItemCreate.postalcode,
         telephone:coworkingItemCreate.telephone,
         region:coworkingItemCreate.region,
         opentime:coworkingItemCreate.opentime,
         closetime:coworkingItemCreate.closetime,
         picture:coworkingItemCreate.picture


      }),
    })
    
    if(!response.ok){
      return await response.json()
    }

    return await response.json()
}