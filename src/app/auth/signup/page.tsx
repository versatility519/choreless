"use client"
import React, { useState, useEffect } from "react"
import Logobar from "@/components/Logobar"
import Social from "@/components/Social"
import Link from "next/link"
import Image from "next/image"
import signup from "@/public/landing.png"
const SignInPage = () => {

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
    <div className=" flex w-full justify-center lg:flex-row flex-col px-4 gap-4">
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <Logobar />
        <div className="flex flex-col gap-3 items-center justify-center lg:mx-auto mx-4 my-16 px-8 bg-white py-16 max-w-lg rounded-3xl shadow-xl">
          <p className="text-3xl text-center px-16 font-bold">Ready to save 5+ hours every week?</p>

          <button className="w-full p-2 bg-black rounded-full text-lg text-white">Sign up with email</button>


          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full text-black border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          <Social />

          <div className="flex gap-2 items-center text-center  text-gray-600">
            <Link href="/auth/signin">
              <p className=" text-sm text-center text-blue-500 hover:underline">
                Already have an account? Log in
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-screen">
        <Image src={signup} alt="logo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-3xl text-center px-16 font-bold text-white transition-opacity duration-500">
            {carouselTexts[currentTextIndex]}
          </p>
        </div>
      </div>
    </div>

  )
}

export default SignInPage