import Link from "next/link";
import { BookingItem2, BookingJson } from "../../interface";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import deleteBooking from "@/libs/deleteBooking";

export default async function AllBooking({
  bookingsJson,
}: {
  bookingsJson: Promise<BookingJson>;
}) {
  const bookingsJsonReady = await bookingsJson;

  return (
    <>
      <div className="text-[30px] font-bold text-center mt-10">
        You have {bookingsJsonReady.count} bookings
      </div>
      <div className="flex min-h-full w-auto flex-1 flex-col justify-center rounded-3xl px-6 py-12 md:px-15 md:mx-20 lg:mx-[200px]">
        {bookingsJsonReady.data.map((BookingItem2: BookingItem2) => (
          <div
            className="bg-white p-5 rounded-xl drop-shadow-xl w-auto m-3"
            key={BookingItem2.createAt}
          >
            <div className="text-[25px] font-bold">
              {BookingItem2.coworking?.name}
            </div>
            <div className="text-md mt-5">
              From {BookingItem2.start} to {BookingItem2.end}
            </div>
            <div className="text-md mt-2">
              Date {BookingItem2.apptDate.split("T")[0]}
            </div>
            <div className="text-md mt-2">By {BookingItem2.user}</div>
            <div className="mt-5 flex justify-end">
              <div className="ml-5">
                <Link href={"/mybooking/edit/" + BookingItem2._id}>
                  <button className="block rounded-md bg-black hover:bg-indigo-900 px-6 py-2 text-white shadow-sm">
                    Edit
                  </button>
                </Link>
              </div>
              <div className="ml-5">
                <Link href={`/mybooking/delete/${BookingItem2._id}`}>
                  <button className="block rounded-md bg-black hover:bg-indigo-900 px-6 py-2 text-white shadow-sm right-5 bottom-5">
                    Remove
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
