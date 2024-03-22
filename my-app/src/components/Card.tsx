import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import React, {useState} from 'react';


export default function Card ( {  hospitalName , imgSrc } : {hospitalName:string, imgSrc:string}) {

    return (
        <InteractiveCard contentName ={hospitalName}> 
            <div className='w-full h-[70%] relative rounded-lg'> 
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-lg'
                    />
                </div>
                <div className='w-full h-[15%] p-[10px]'>{hospitalName}</div>  
        </InteractiveCard>
    );
}