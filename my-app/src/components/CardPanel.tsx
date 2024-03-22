'use client'
import { useReducer } from 'react';
import Card from './Card';
import { Rating } from '@mui/material';
import Link from 'next/link';

export default function CardPanel() {
    
    const showRatingReducer = (ratingList: Map<string,number>,action: { type:string; hospitalName:string; rating:number} ) => {
        switch (action.type) {
            case'set': {
                return new Map(ratingList.set(action.hospitalName,action.rating));
            }
            case 'remove': {
                ratingList.delete(action.hospitalName);
                return new Map(ratingList);
            }
            default:return ratingList;
        }
    }

    const [ratingList, dispatchRating] = useReducer(showRatingReducer, new Map<string,number> ([
        ['Chulalongkorn Hospital', 5],
        ['Rajavithi Hospital', 5],
        ['Thammasat University Hospital', 5],
    ]) )

    const mockCardRepo = [
        {hid:"001",name:"Chulalongkorn Hospital",image:"/img/chula.jpg"},
        {hid:"002",name:"Rajavithi Hospital",image:"/img/rajavithi.jpg"},
        {hid:"003",name:"Thammasat University Hospital",image:"/img/thammasat.jpg"},]

    return (
        <div>
           <div style={{margin:"20px",display:"flex",flexDirection:"row",alignContent:"space-around",justifyContent:"space-around",flexWrap:"wrap"}}>
                {
                    mockCardRepo.map((hospitalItem)=> (
                        <Link href={ `/hospital/${hospitalItem.hid}`} className='w-1/5'>
                        <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image} />
                        </Link>
                    ))
                } 
            </div> 
            { Array.from(ratingList).map(([hospital, rating]) => <div key={hospital} data-testid={hospital}
                onClick={ () => dispatchRating({type:'remove',hospitalName:hospital,rating:0 })}>
                    {hospital} Rating: {rating} </div>)}    
        </div>
        
    );
}