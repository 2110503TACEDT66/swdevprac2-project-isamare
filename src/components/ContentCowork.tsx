import Image from 'next/image'

export default function ContentCowork() {
   return(
      <div className="block bg-white h-auto w-[100vw]">
         <div className='flex flex-wrap justify-center'>
            <div className='rounded-lg w-[180px] h-[300px] mx-3 my-5 relative'>
               <Image src={'/img/test.png'} alt='Product Picture'
                  fill={true} className='object-cover absolute rounded-lg '
               />
            </div>   
            
            <div className="absolute m-5 p-5 w-[70%] relative">
                  <div className='text-[#252645] font-extrabold text-[35px] text-left'>Coworking in Bangkok</div>
                  <div className='text-black text-[18px] mt-9 text-justify'>Work along like-minded professionals in our vibrant coworking spaces in Bangkok, with break out areas and networking events to foster collaboration and growth. Drop in and hot-desk in an open-plan workspace, or reserve your own dedicated desk in a shared office.</div>
                  <div className='text-black font-bold text-[18px] mt-14'>How can we support you in Bangkok:</div>   
                  <ul className=' pt-1 pl-2 list-disc list-inside'>
                     <li className='m-1'> Fixed desks for 24/7 access reserved just for you</li>
                     <li className='m-1'> Coworking memberships for regular access</li>
                     <li className='m-1'> Day Coworking for on demand use as you need it</li>
                  </ul> 
            </div>

         </div>
         
      </div>
   )
   
}