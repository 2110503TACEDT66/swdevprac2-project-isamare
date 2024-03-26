import { CoworkingItemCreate } from "../../interface"

export default async function postCoworking(token: string,coworkingItemCreate : CoworkingItemCreate){
   
    const response = await fetch(`https://coworking-reservation-app-isamare.vercel.app/api/project/coworkings`,{
       method: "POST",
       headers: {
            "Content-type":"application/json",
            authorization: `Bearer ${token}`,
       },
       body: JSON.stringify({
            name: coworkingItemCreate.name,
            address: coworkingItemCreate.address,
            district: coworkingItemCreate.district,
            province: coworkingItemCreate.province,
            postalcode: coworkingItemCreate.postalcode,
            telephone: coworkingItemCreate.telephone,
            region: coworkingItemCreate.region,
            opentime: coworkingItemCreate.opentime,
            closetime: coworkingItemCreate.closetime,
            picture: coworkingItemCreate.picture
         }),
    })
    
    if(!response.ok){
      return await response.json()
    }

    return await response.json()
 }