"use client"
import React, { useState, useEffect } from "react"
import Logobar from "@/components/Logobar"
import Social from "@/components/Social"
import Link from "next/link"
import Image from "next/image"
import signup from "@/public/landing.png"

export default function SignUpPage() {

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const carouselTexts = [
    "Ready to save 5+ hours every week?",
    "Streamline your workflow effortlessly",
    "Boost your productivity with AI",
    "Join thousands of satisfied users"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length)
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])


  return (
    <div className=" flex w-full justify-center lg:flex-row flex-col mx- gap-4">
      <div className="flex flex-col lg:items-start items-center w-full lg:w-1/2">
        <Logobar />
        <div className="flex flex-col gap-3 items-center justify-center lg:mx-auto mx-4 lg:my-16 mb-8 px-8 bg-white pt-16 max-w-lg rounded-3xl shadow-xl">
          <p className="text-3xl text-center md:px-16 sm:px-4 px-2 font-bold mb-4">Ready to save 5+ hours every week?</p>

          <Link href="/auth/signup/personal-Info" className="w-full text-center  p-3 bg-black rounded-full text-lg text-white">
            Sign up with email
          </Link>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full text-black border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>
          <Social />
          {/* <div className="flex gap-2 items-center text-center  text-gray-600"> */}
            <Link href="/auth/signin">
              <p className=" text-sm text-center text-blue-500 hover:underline py-8">
                Already have an account? Log in
              </p>
            </Link>
          {/* </div> */}
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 lg:h-screen">
      
        <Image src={signup} alt="logo" className="w-full lg:h-full h-72 lg:rounded-none rounded-[2rem] px-4 lg:px-0  object-cover  " />
 
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
          <p className="text-3xl text-center px-16 font-bold text-white transition-opacity duration-500">
            {carouselTexts[currentTextIndex]}
          </p>
        </div>
      </div>
    </div>

  )
}
