import Image from 'next/image'

export default function AboutPage(){

   return(
      <main>
         <div className='block pt-16 pl-20'>
            <div className='text-[#5577CE] font-bold text-[25px]'>Nawakorn Chamroon</div>
            <div className='flex flex-row px-9 py-4'>
               <Image src={'/img/github.png'} className='h-full w-auto' alt='logo'
               width={0} height={0} sizes='55vh'/>
               <div className='text-[17px] ml-6 text-center mt-auto mb-auto'>Nawakorn23</div> 
            </div>
            <div className='flex flex-row px-9 py-px'>
               <Image src={'/img/email.png'} className='h-full w-auto' alt='logo'
               width={0} height={0} sizes='55vh'/>
               <div className='text-[17px] ml-6 text-center mt-auto mb-auto'>6633063821@student.chula.ac.th</div>
            </div>
         </div>

         <div className='block pt-16 pl-20'>
            <div className='text-[#5577CE] font-bold text-[25px]'>Chananut Hussarung</div>
            <div className='flex flex-row px-9 py-4'>
               <Image src={'/img/github.png'} className='h-full w-auto' alt='logo'
               width={0} height={0} sizes='55vh'/>
               <div className='text-[17px] ml-6 text-center mt-auto mb-auto'>sherlyzi</div> 
            </div>
            <div className='flex flex-row px-9 py-px'>
               <Image src={'/img/email.png'} className='h-full w-auto' alt='logo'
               width={0} height={0} sizes='55vh'/>
               <div className='text-[17px] ml-6 text-center mt-auto mb-auto'>6633045521@student.chula.ac.th</div>
            </div>
         </div>

         <div className='block pt-16 pl-20'>
            <div className='text-[#5577CE] font-bold text-[25px]'>Nitchakarn Jirathunyawong</div>
            <div className='flex flex-row px-9 py-4'>
               <Image src={'/img/github.png'} className='h-full w-auto' alt='logo'
               width={0} height={0} sizes='55vh'/>
               <div className='text-[17px] ml-6 text-center mt-auto mb-auto'>NitchakarnJ</div> 
            </div>
            <div className='flex flex-row px-9 py-px'>
               <Image src={'/img/email.png'} className='h-full w-auto' alt='logo'
               width={0} height={0} sizes='55vh'/>
               <div className='text-[17px] ml-6 text-center mt-auto mb-auto'>6633077621@student.chula.ac.th</div>
            </div>
         </div>
      </main>
   )


}