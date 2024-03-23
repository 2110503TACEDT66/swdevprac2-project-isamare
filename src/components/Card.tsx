
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


export default function Card({hospitalName, imgSrc,onRating}:{hospitalName:string,imgSrc:string,onRating?:Function}){
   // const [rating, setRating] = useState(0);
   // const [value, setValue] = React.useState<number | null>(5);
   
   
   return(
      <InteractiveCard contentName={hospitalName}>
         <div className='w-full h-[70%] relative rounded-t-lg' >
            <Image src = {imgSrc}
            alt='Product Picture'
            fill={true}
            className='object-cover rounded-t-lg'
            />
         </div>
         <div className='w-fill h-[15%] p-[10px]'>{hospitalName}</div>
         {
            onRating?<Rating className='w-fill h-[10%] mx-2 my-2'
                        data-testid={`${hospitalName} Rating`}
                        id={`${hospitalName} Rating`}
                        name={`${hospitalName} Rating`}
                        defaultValue={5}
                        onClick={ (e) => {  e.stopPropagation(); }}
                        onChange={(event, newValue) => {
                           onRating(hospitalName,newValue)
                           }
                        }
                     /> : ''
         }


         
      </InteractiveCard>
   );

}
