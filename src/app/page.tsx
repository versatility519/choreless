import Image from "next/image";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Navbar from '@/components/Navbar';
import landing from "@/public/images/landing.png"

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          {/* <section className="bg-white py-12 px-4 sm:px-6 lg:px-8"> */}
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-8">
              <p className="text-3xl font-bold text-gray-700 max-w-3xl mx-auto">
                You’ll wonder how you did without Choreless
              </p>
            </div>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Choreless subscribers are getting more balance every day, with a greater sense of
                well-being while being present for those priceless moments they cherish and
                remember.
              </p>
            </div>
            <div className="flex flex-col items-center mb-8">
              <button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold">
                Schedule my pickup <span className="ml-2">→</span>
              </button>
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <IoShieldCheckmarkOutline className="w-4 h-4 mr-1" />
                Satisfaction Guaranteed
              </div>
            </div>
          </div>
            <div className="max-w-7xl mx-auto  rounded-lg overflow-hidden shadow-lg">
              <Image
                src={landing}
                alt="A smiling woman sitting on the floor between a 'VASH & FOLD' laundry bag and a laundry basket, with clothes flying in the air"
                className="w-full h-auto"
              />
            </div>

        </main>

      </div>
    </div>
  );
}
