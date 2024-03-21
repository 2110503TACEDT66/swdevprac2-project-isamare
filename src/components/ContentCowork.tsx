import Image from 'next/image'



export default function ContentCowork() {
   return(
      <div className="bg-white flex flex-row justify-center">
         <div className=' h-full block relation flex flex-row justify-center'>
            <Image src={'/img/conCowork.png'} className='h-full w-auto mt-12' alt='logo'
            width={0} height={0}sizes='200vw'/>
            <div className="m-5 p-5 w-[50%]">
               <div className='text-[#252645] font-extrabold text-[35px] mt-3'>Coworking in Bangkok</div>
               <div className='text-black text-[18px] mt-9'>Work along like-minded professionals in our vibrant coworking spaces in Bangkok, with break out areas and networking events to foster collaboration and growth. Drop in and hot-desk in an open-plan workspace, or reserve your own dedicated desk in a shared office.</div>
               <div className='text-black font-bold text-[18px] mt-14'>How can we support you in Bangkok:</div>   
               <div className=' pt-1 pl-2 '>
                  <div className='m-1'>Fixed desks for 24/7 access reserved just for you</div>
                  <div className='m-1'>Coworking memberships for regular access</div>
                  <div className='m-1'>Day Coworking for on demand use as you need it</div>
               </div> 
            </div>
         </div>
         

      </div>
   )
   
}