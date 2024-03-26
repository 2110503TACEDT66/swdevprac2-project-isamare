"use client";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Link from "next/link";

export default function Card({
  coworkingName,
  imgSrc,
}: {
  coworkingName: string;
  imgSrc: string;
}) {
  return (
    <InteractiveCard contentName={coworkingName}>
      <div className="w-full h-[70%] relative rounded-t-lg bg-white mt-5">
        <Image 
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[30%] p-[10px] font-bold">{coworkingName}</div>
    </InteractiveCard>
  );
}
