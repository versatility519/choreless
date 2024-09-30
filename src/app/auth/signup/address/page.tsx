"use client"
import React from "react"
import Logobar from "@/components/Logobar"
import Link from "next/link"
import { LuChevronLeft } from "react-icons/lu";

export default function AddressPage() {

    return (
        <div className="flex flex-col items-center w-full ">
            <div className="flex p-10 justify-start w-full">
                <Logobar />
            </div>
            <div className="flex flex-col gap-3 w-full sm:mx-auto mx-4 lg:my-16 px-8 bg-white py-8 max-w-lg rounded-3xl shadow-xl">
                <div className=" gap-4 flex flex-col">
                    <div className="flex flex-col gap-3 py-2">
                        <div className="flex gap-3 items-center">
                            <Link href="/auth/signup/personal-Info"><LuChevronLeft size={40} className="text-black" /></Link>
                            <p className="text-3xl  md:px-16 sm:px-8 px-4  text-black font-walsheim-medium">Address</p>
                        </div>
                        <p className="text-base text-center text-gray-500">Where we should pick up your clothes</p>
                    </div>

                    <input type="email" placeholder="Address" className="w-full p-2 border border-gray-300 rounded-md" />
                    <p className="font-walsheim uppercase text-sm">Add more address details</p>
                    <input type="text" placeholder="Apt # (Optional)" className="w-full p-2 border border-gray-300 rounded-md" />

                    <textarea style={{scrollbarWidth:'none'}} cols={10} rows={5} placeholder="Pickup & delivery instructions" className="w-full p-2 border border-gray-300 rounded-md"></textarea>

                    <Link href="/summery" className="w-full text-center  p-3 bg-black rounded-full text-lg text-white">
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