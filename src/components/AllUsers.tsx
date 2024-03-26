import Link from "next/link";
import { UserItem, UserJson, UserBookingItem } from "../../interface";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import deleteBooking from "@/libs/deleteBooking";

export default async function AllUsers({
  usersJson,
}: {
  usersJson: Promise<UserJson>;
}) {
  const usersJsonReady = await usersJson;

  /*const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const handleDeleteBooking = async (token: string, bookingItem: BookingItem2) => {
        const response = await deleteBooking(token, bookingItem);
        if (response.success == true) {
          alert('You deleted')
        } else if (response.success == false){
         alert(response.message)
        }
    };*/

  return (
    <>
      <div className="text-3xl font-bold text-center mt-10 mb-6">
        You have {usersJsonReady.count} users
      </div>
      <div className="flex min-h-full w-auto flex-1 flex-col justify-center rounded-3xl px-6 py-12 md:px-15 md:mx-20 lg:mx-[200px]">
        {usersJsonReady.data.map((UserItem: UserItem) => (
          <div
          className="bg-white p-5 rounded-xl drop-shadow-xl w-auto m-3"
          key={UserItem.email}
        ><div className="text-[20px] font-lg">
        Email: {UserItem.email}
        <div className="text-md mt-2">Name: {UserItem.name}</div>
        <div className="text-md mt-2">Telephone: {UserItem.telephone}</div>
      </div>
      {
            UserItem.reservations.map((UserBookingItem: UserBookingItem)=>
            <div key={UserItem.email}>Reservation: {UserBookingItem.apptDate.split('T')[0]} from {UserBookingItem.start} to {UserBookingItem.end}</div>)
          }
      </div>
        ))}
      </div>
    </>
  );
}



{/*<div>{UserItem.email}
          {
            UserItem.reservations.map((UserBookingItem: UserBookingItem)=>
            <div>{UserBookingItem.apptDate}</div>)
          }
        </div>*/}