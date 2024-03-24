'use client'
import Link from "next/link";
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"


export default function LoginPage() {
   const router = useRouter()
   const [data, setData ] = useState({
      email:"",
      password:""
   })

   const LoginUser = async (e:FormEvent) =>{
      e.preventDefault();
      const form = new FormData(e.target as HTMLFormElement)

      signIn('credentials',{
         email:form.get('email'),password:form.get('password'),callbackUrl:'/'
      });
   };

   return (
     <>
       {/*
         This example requires updating your template:
 
         ```
         <html class="h-full bg-white">
         <body class="h-full">
         ```
       */}
       
       <div className="flex min-h-full w-auto flex-1 flex-col justify-center rounded-3xl px-6 py-12 md:px-15 md:mx-20 lg:mx-[300px]">
        <div className="bg-white p-5 rounded-3xl drop-shadow-xl w-auto">
            <div className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
            </div>
       
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={LoginUser}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={data.email}
                      onChange={(e)=>{
                        setData({ ...data,email: e.target.value})
                      }}
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
                      onChange={(e)=>{
                        setData({ ...data,password: e.target.value})
                      }}
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="flex w-[40%] m-auto justify-center  rounded-md bg-[#252645] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-gradient-to-r hover:from-[#252645] hover:to-[#5C5EAB]"
                  >
                    Login
                  </button>
                </div>
              </form>
    
              <p className="mt-10 text-center text-[13px] text-gray-500">
              New Customer OR don't have online account access?{' '}
                <Link href={'/'} className="font-semibold leading-6 text-[#5577CE]">
                  register
                </Link>
              </p>
            </div>

        </div>
         
       </div>
     </>
   )
   
 }