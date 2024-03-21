import Link from "next/link";
import styles from './topmenu.module.css'


export default function TopMenuItem({title,pageRef}:{title:string,pageRef:string}){
   return(
      <Link href={pageRef} className='w-[120px] text-center mr-auto ml-auto mt-auto mb-auto font-sans-serif ... text-[10pt] text-gray-500'>
         {title}
      </Link>
   )
}