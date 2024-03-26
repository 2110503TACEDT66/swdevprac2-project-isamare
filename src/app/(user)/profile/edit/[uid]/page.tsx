"use client";
import Link from "next/link";
import { UserUpdate } from "../../../../../../interface";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import editUserProfile from "@/libs/editUserProfile";
import { useSession } from "next-auth/react";

export default function EditProfileUser({params}:{params:{uid:string}}) {
   const {data: session} = useSession()
    if (!session || !session.user.token ) return null

    
  const [hasEdit, setHasEdit] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    telephone: "",
    
  });

  const editProfile = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    console.log(data.name);
    if (data.name || data.email || data.telephone) {
      const item: Partial<UserUpdate> = {}
        if (data.name !== "") {
          item.name = data.name
        }
        if (data.email !== "") {
          item.email = data.email
        }
        if (data.telephone !== "") {
          item.telephone = data.telephone
        }
      console.log(item)
            
            const editing = await editUserProfile(session.user.token, params.uid,item);
            console.log("Booking result:", editing);
            if (editing.success == true) {
               setHasEdit(true)
                

            }
            else if (editing.success == false) {
                alert(editing.message)
            }
    }
  };

  

  return (
    <>
      <div className="flex min-h-full w-auto flex-1 flex-col justify-center rounded-3xl px-6 py-12 md:px-15 md:mx-20 lg:mx-[300px]">
        <div className="bg-white p-5 rounded-3xl drop-shadow-xl w-auto">
          <div className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit Profile
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={editProfile} >
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
                    //required
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
                    //required
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
                    //required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                
                  <button
                  className="flex w-[40%] m-auto justify-center  rounded-md bg-[#252645] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-gradient-to-r hover:from-[#252645] hover:to-[#5C5EAB]"
                  type="submit"
                  >
                    {hasEdit ? "complete" : "Edit"}
                  </button>
                
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}