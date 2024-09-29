"use client"
import React from "react"
import Logobar from "@/components/Logobar"
import Link from "next/link"
import { LuChevronLeft } from "react-icons/lu";

export default function PersonalInfoPage() {

    return (
        <div className="flex flex-col  w-full ">
            <Logobar />
            <div className="flex flex-col gap-3 items-center justify-center sm:mx-auto mx-4 lg:my-16 px-8 bg-white py-8 max-w-lg rounded-3xl shadow-xl">
                <div className=" gap-4 flex flex-col items-center justify-center">
                    <div className="flex gap-3 items-center py-4">
                        <Link href="/auth/signup"><LuChevronLeft className="text-2xl" /></Link>
                        {/* <p className="md:text-3xl text-nowrap sm:text-2xl text-center px-16 font-bold">Let&apos;s get to started</p> */}
                        <p className="sm:text-3xl text-2xl text-center md:px-16 sm:px-8 px-4  font-bold">Let&apos;s get to started</p>
                    </div>
                    <div className="flex gap-3">
                        <input type="text" placeholder="Fist Name" className="w-full p-2 border border-gray-300 rounded-md" />
                        <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <input type="text" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="password" placeholder="Greate password" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                <p className="text-sm text-center py-4 text-gray-600">
                    By selecting continue, you agree to receive service and marketing auto-sent texts from Choreless. Opt-out anytime on your “My Account” page or text “STOP”. Message & data rates may apply. By continuing, you also agree to our Terms and Privacy Policy.
                </p>
 
                <Link href="/auth/signup/personal-Info" className="w-full text-center  p-3 bg-black rounded-full text-lg text-white">
                    Continue
                </Link>
                
            </div>
        </div>
    )
}