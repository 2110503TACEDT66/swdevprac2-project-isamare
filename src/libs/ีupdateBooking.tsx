import { BookingItem2 } from "../../interface";

export default async function updateBooking(
  token: string,
  bookingItem2: BookingItem2
) {
  const response = await fetch(
    `https://coworking-reservation-app-isamare.vercel.app/api/project/reservations/${bookingItem2._id}`,
    {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update booking");
  }

  return await response.json();
}
