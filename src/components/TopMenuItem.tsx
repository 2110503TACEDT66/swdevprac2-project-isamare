import Link from "next/link";
import styles from './topmenu.module.css'


export default function TopMenuItemB({title,pageRef}:{title:string,pageRef:string}){
   return(
      <Link href={pageRef} className='w-[120px] text-center font-extrabold mt-auto mb-auto mx-5 font-sans-serif ... text-[13pt] text-black'>
         {title}
      </Link>
   )
}