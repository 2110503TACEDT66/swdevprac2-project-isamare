import Image from 'next/image'

export default function FootCowork() {
   return (
      <div className="block bg-white h-auto w-[100vw]">
         <div className='flex flex-wrap justify-center'>
            <div className="absolute m-5 p-5 w-[85%] relative my-20">
               <div className='text-[#252645] font-bold text-[35px] text-left'>We have Bangkok covered</div>
               <div className='text-black text-[18px] mt-6 text-justify'>Work alongside flourishing start-ups and multinational 
                        companies in vibrant Bangkok. Get to know like-minded professionals and soak up their entrepreneurial 
                        spirit in our sociable and dynamic coworking spaces, conveniently located across the city.</div>
               <div className='text-black font-semibold text-[25px] mt-12'>Coworking in Bangkok that works for you</div>
               <div className='text-black text-[18px] mt-6 text-justify'>Discover productive coworking in buzzing Bangkok,
                        where you can make that vital connection to move your business forward. Connect and collaborate with
                        like-minded professionals in our shared offices and open-plan spaces, with flexible options by the hour,
                        day, month or year. Reserve a dedicated desk or drop in and take your pick of the hot-desks.</div>
            </div>
         </div>
      </div>
   )
}