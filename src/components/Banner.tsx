"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Banner() {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <div className="block p-[5px] m-0 w-[100vw] h-[90vh] relative">
      <Image
        src={"/img/cover1.png"}
        alt="cover"
        fill={true}
        className="object-cover rounded-t-lg"
        priority
      />
    </div>
  );
}
