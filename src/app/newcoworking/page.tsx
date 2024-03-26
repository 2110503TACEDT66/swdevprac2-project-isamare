

import { useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { CoworkingItemCreate } from "../../../interface";

import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import postCoworking from "@/libs/postCoworking";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export default async function Booking() {
    const {data: session} = useSession()
    if (!session || !session.user.token || session?.user?.role!=='admin') return null

    const dispatch = useDispatch<AppDispatch>()
    const [hasCreated, sethasCreated] = useState(false)
    const [data, setData ] = useState({
      name:"",
      address:"",
      district:"",
      province:"",
      postalcode:"",
      telephone:"",
      region:"",
      opentime:"",
      closetime:"",
      picture:""

   })

    const createCoworking = async (e:FormEvent) => {
      "use server"
      // e.preventDefault();
      const form = new FormData(e.target as HTMLFormElement)
      console.log(data.name)
        if (data.name && data.address && data.district && data.province && data.postalcode && data.telephone
            && data.region && data.opentime && data.closetime && data.picture) {
            const item:CoworkingItemCreate = {
               name: data.name,
               address: data.address,
               district: data.district,
               province: data.province,
               postalcode: data.postalcode,
               telephone: data.telephone,
               region:data.region,
               opentime: data.opentime,
               closetime:data.closetime,
               picture: data.picture
            }
            console.log(item)
            
            const creating = await postCoworking(session.user.token, item);
            console.log("Booking result:", creating);
            if (creating.success == true) {
               sethasCreated(true)
                

            }
            else if (creating.success == false) {
                alert(creating.message)
            }
            revalidateTag(" cars ")
            redirect('/coworking')
        }
    }

    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [start, setStart] = useState<string|null>(null)
    const [end, setEnd] = useState<string|null>(null)

    return (
        <main className="mt-8">
            <>
            <div className="flex min-h-full w-auto flex-1 flex-col justify-center rounded-3xl px-6 py-12 md:px-15 md:mx-20 lg:mx-[300px]">
            <div className="bg-white p-5 rounded-3xl drop-shadow-xl w-auto">
               <div className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Create Coworking
               </div>
       
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={createCoworking}>
                  <div>
                     <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 ">
                     Name
                     </label>
                     <div className="mt-2">
                     <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        value={data.name}
                        onChange={(e)=>{
                           setData({ ...data,name: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900 ">
                        address
                     </label>
                     <div className="mt-2">
                     <input
                        id="address"
                        name="address"
                        type="address"
                        autoComplete="address"
                        value={data.address}
                        onChange={(e)=>{
                           setData({ ...data,address: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900 ">
                        district
                     </label>
                     <div className="mt-2">
                     <input
                        id="district"
                        name="district"
                        type="district"
                        autoComplete="district"
                        value={data.district}
                        onChange={(e)=>{
                           setData({ ...data,district: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>

                  
                  <div>
                     <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900 ">
                        province
                     </label>
                     <div className="mt-2">
                     <input
                        id="province"
                        name="province"
                        type="province"
                        autoComplete="province"
                        value={data.province}
                        onChange={(e)=>{
                           setData({ ...data,province: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="postalcode" className="block text-sm font-medium leading-6 text-gray-900 ">
                        postalcode
                     </label>
                     <div className="mt-2">
                     <input
                        id="postalcode"
                        name="postalcode"
                        type="postalcode"
                        autoComplete="postalcode"
                        value={data.postalcode}
                        onChange={(e)=>{
                           setData({ ...data,postalcode: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-gray-900 ">
                        telephone
                     </label>
                     <div className="mt-2">
                     <input
                        id="telephone"
                        name="telephone"
                        type="telephone"
                        autoComplete="telephone"
                        value={data.telephone}
                        onChange={(e)=>{
                           setData({ ...data,telephone: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900 ">
                        region
                     </label>
                     <div className="mt-2">
                     <input
                        id="region"
                        name="region"
                        type="region"
                        autoComplete="region"
                        value={data.region}
                        onChange={(e)=>{
                           setData({ ...data,region: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="opentime" className="block text-sm font-medium leading-6 text-gray-900 ">
                        opentime
                     </label>
                     <div className="mt-2">
                     <input
                        id="opentime"
                        name="opentime"
                        type="opentime"
                        autoComplete="opentime"
                        value={data.opentime}
                        onChange={(e)=>{
                           setData({ ...data,opentime: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="closetime" className="block text-sm font-medium leading-6 text-gray-900 ">
                        closetime
                     </label>
                     <div className="mt-2">
                     <input
                        id="closetime"
                        name="closetime"
                        type="closetime"
                        autoComplete="closetime"
                        value={data.closetime}
                        onChange={(e)=>{
                           setData({ ...data,closetime: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="picture" className="block text-sm font-medium leading-6 text-gray-900 ">
                        picture
                     </label>
                     <div className="mt-2">
                     <input
                        id="picture"
                        name="picture"
                        type="picture"
                        autoComplete="picture"
                        value={data.picture}
                        onChange={(e)=>{
                           setData({ ...data,picture: e.target.value})
                        }}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                     </div>
                  </div>
    
                  <div>
                     <button
                      
                     className="flex w-[40%] m-auto justify-center  rounded-md bg-[#252645] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-gradient-to-r hover:from-[#252645] hover:to-[#5C5EAB]"
                     type="submit"
                     >
                     {
                       hasCreated?'complete':'Create'
                     }
                     </button>
                  </div>
              </form>
    
              
            </div>

        </div>
         
       </div>
     </>
        </main>
    );
}