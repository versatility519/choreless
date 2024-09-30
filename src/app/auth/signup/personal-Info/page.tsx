"use client"
import React from "react"
import Logobar from "@/components/Logobar"
import Link from "next/link"
import { LuChevronLeft } from "react-icons/lu";

export default function PersonalInfoPage() {

    return (
        <div className="flex flex-col items-center  w-full ">
            <div className="flex p-10 justify-start w-full">
                <Logobar />
            </div>
            <div className="flex flex-col gap-3 w-full sm:mx-auto mx-4 lg:my-16 px-8 bg-white py-8 max-w-lg rounded-3xl shadow-xl">
                <div className=" gap-4 flex flex-col ">
                    <div className="flex w-full items-center text-start py-4">
                        <Link href="/auth/signup" className=""><LuChevronLeft size={40} className="text-black" /></Link>
                        <p className="text-3xl text-center md:px-16 sm:px-8 px-4 text-black font-walsheim-medium">Let&apos;s get to started</p>
                    </div>
                    <div className="flex w-full gap-3">
                        <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded-md" />
                        <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <input type="number" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="password" placeholder="Create password" className="w-full p-2 border border-gray-300 rounded-md" />


                    <p className="text-sm text-center px-2 py-4 text-gray-600">
                        By selecting continue, you agree to receive service and marketing auto-sent texts from Choreless. Opt-out anytime on your “My Account” page or text “STOP”. Message & data rates may apply. By continuing, you also agree to our Terms and Privacy Policy.
                    </p>

                    <Link href="/auth/signup/address" className="w-full text-center p-3 bg-black rounded-full text-lg text-white">
                        Continue
                    </Link>
                </div>
            </div>
            <div className="fixed bottom-0 text-sm text-gray-500 mt-8 mb-4">
                © {new Date().getFullYear()} Choreless. All rights reserved.
            </div>
        </div>
    )
}