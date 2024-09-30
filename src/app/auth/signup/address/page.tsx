"use client"
import React from "react"
import Logobar from "@/components/Logobar"
import Link from "next/link"
import { LuChevronLeft } from "react-icons/lu";

export default function AddressPage() {

    return (
        <div className="flex flex-col  w-full ">
            <div className="flex p-10 justify-start w-full">
                <Logobar />
            </div>
            <div className="flex flex-col gap-3 items-center justify-center sm:mx-auto mx-4 lg:my-16 px-8 bg-white py-8 max-w-3xl rounded-3xl shadow-xl">
                <div className=" gap-4 flex flex-col">
                    <div className="flex flex-col gap-3 py-2">
                        <div className="flex gap-3 items-center">
                            <Link href="/auth/signup/personal-info"><LuChevronLeft size={40}/></Link>
                            <p className="sm:text-3xl text-2xl text-center md:px-16 sm:px-8 px-4 text-black font-walsheim-medium">Address</p>
                        </div>
                        <p className="text-base text-center text-gray-500">Where we should pick up your clothes</p>
                    </div>
                  
                    <input type="email" placeholder="Address" className="w-full p-2 border border-gray-300 rounded-md" />
                    <p className="font-walsheim uppercase text-sm">Add more address details</p>
                    <input type="password" placeholder="Apt # (Optional)" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="password" placeholder="Pickup & delivery instructions" className="w-full p-2 border border-gray-300 rounded-md" />

 

                    <Link href="/summery" className="w-full text-center  p-3 bg-black rounded-full text-lg text-white">
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    )
}