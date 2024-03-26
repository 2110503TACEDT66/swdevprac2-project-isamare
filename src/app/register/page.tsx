"use client";
import Link from "next/link";
import { User } from "../../../interface";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookingSlice";
import { useSession } from "next-auth/react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import postBooking from "@/libs/postBooking";
import { authOptions } from "../api/auth/[...nextauth]/route";
import userRegister from "@/libs/userRegister";
import { signIn } from "next-auth/react";

export default function CreateUser() {
  const [hasRegistered, setHasRegistered] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    telephone: "",
    password: "",
  });

  const register = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    console.log(data.name);
    if (data.name && data.email && data.password && data.telephone) {
      const item: User = {
        name: data.name,
        email: data.email,
        password: data.password,
        telephone: data.telephone,
      };
      console.log(item);
      try {
        const register = await userRegister(item);
        console.log("Register Result:", register);
        setHasRegistered(true);
        signIn("credentials", {
          email: form.get("email"),
          password: form.get("password"),
          callbackUrl: "/",
        });
      } catch (error) {
        console.error("Error occurred while Register", error);
      }
    }
  };

  const [email, setEmail] = useState<string | null>(null);

  return (
    <>
      <div className="flex min-h-full w-auto flex-1 flex-col justify-center rounded-3xl px-6 py-12 md:px-15 md:mx-20 lg:mx-[300px]">
        <div className="bg-white p-5 rounded-3xl drop-shadow-xl w-auto">
          <div className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={register}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    value={data.name}
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value });
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Telephone
                </label>
                <div className="mt-2">
                  <input
                    id="telephone"
                    name="telephone"
                    type="telephone"
                    autoComplete="telephone"
                    value={data.telephone}
                    onChange={(e) => {
                      setData({ ...data, telephone: e.target.value });
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={data.password}
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  className="flex w-[40%] m-auto justify-center  rounded-md bg-[#252645] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-gradient-to-r hover:from-[#252645] hover:to-[#5C5EAB]"
                  type="submit"
                >
                  {hasRegistered ? "complete" : "Register"}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-[13px] text-gray-500">
              Already have online account access?{" "}
              <Link
                href={"/login"}
                className="font-semibold leading-6 text-[#5577CE]"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}