import Image from "next/image";
import Card from "./Card";

export default function ContentCowork() {
  return (
    <div className="block bg-white h-auto w-[100vw]">
      <div className="flex flex-wrap justify-center">
        <div className="rounded-lg w-[230px] h-[350px] mx-3 my-5 relative">
          <Image
            src={"/img/promote.png"}
            alt="Product Picture"
            fill={true}
            className="object-cover absolute rounded-lg my-20 shadow-xl"
          />
        </div>

        <div className="absolute m-5 p-5 w-[70%] relative my-20">
          <div className="text-[#252645] font-bold text-[35px] text-left">
            Coworking in Bangkok
          </div>
          <div className="text-black text-[18px] mt-6 text-justify">
            Work along like-minded professionals in our vibrant coworking spaces
            in Bangkok, with break out areas and networking events to foster
            collaboration and growth. Drop in and hot-desk in an open-plan
            workspace, or reserve your own dedicated desk in a shared office.
          </div>
          <div className="text-black font-bold text-[18px] mt-12">
            How can we support you in Bangkok:
          </div>
          <ul className="pt-1 pl-2 list-disc list-inside">
            <li className="m-1">
              Fixed desks for 24/7 access reserved just for you
            </li>
            <li className="m-1"> Coworking memberships for regular access</li>
            <li className="m-1">
              Day Coworking for on demand use as you need it
            </li>
          </ul>
        </div>
      </div>

      <div className="block bg-[#F4F3F0] h-auto w-[100vw]">
        <div className="flex flex-wrap justify-center">
          <div className="absolute m-5 p-5 w-[85%] relative my-10">
            <div className="text-[#252645] font-bold text-[35px]">
              Flexible workspace designed around your needs
            </div>
            <hr className="border-t-2 border-gray-300 my-7 "></hr>
            <div className="text-[#252645] font-bold text-[27px]">
              Coworking
            </div>
            <div className="text-[#252645] font-regular text-[18px] mt-2">
              Hot desk for the day, or reserve a Dedicated Desk space across
              thousands of locations.
            </div>
          </div>
        </div>

        <div className="block flex items-center justify-center overflow-hidden mb-20">
          <div className="mr-20">
            <Image
              src={"/img/card1.jpg"}
              alt="Wolf Coworking Space"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="mr-20">
            <Image
              src={"/img/card2.jpg"}
              alt="Wolf Coworking Space"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src={"/img/card3.jpg"}
              alt="Wolf Coworking Space"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
