import Link from 'next/link'
import { LuAlignJustify } from "react-icons/lu";
import Logobar from './Logobar';

const Navbar = () => {
  return (
    <div className="max-w-7xl xl:mx-auto mx-4 sm:px-6 mt-4 py-4 text-base rounded-2xl shadow-lg bg-white">
      <div className="flex w-full flex-col sm:flex-row items-center gap-1 justify-between">
        <Logobar />
        <div className='flex items-center gap-4'>
          <nav className="hidden lg:flex items-center text-center">
            <Link href="/things-we-do" className="text-gray-700 hover:bg-slate-300 rounded-lg px-4 py-2 ">
              Things we do
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:bg-slate-300 rounded-lg px-4 py-2 ">
              Pricing
            </Link>
            <Link href="/subscription" className="text-gray-700 hover:bg-slate-300 rounded-lg px-4 py-2 ">
              Subscription
            </Link>
            <Link href="/faq" className="text-gray-700 hover:bg-slate-300 rounded-lg px-4 py-2 ">
              FAQ
            </Link>
            <Link href="/business" className="text-gray-700 hover:bg-slate-300 rounded-lg px-4 py-2 ">
              Choreless for Business
            </Link>
          </nav>
          <div className="flex items-center text-center gap-4 ">
            <Link href="/auth/signin" className='border w-full text-nowrap text-black border-black hover:border-slate-300  hover:bg-slate-300 rounded-lg px-4 py-2'>
              Sign in
            </Link>
            <Link href="/schedule-my-pickup" className=" w-full text-nowrap px-4 py-2 font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700  ">
              Schedule my pickup
            </Link>

            <div className=" group flex lg:hidden relative cursor-pointer py-2">
              <LuAlignJustify className='text-black size-8 my-2 rounded-lg' />

              <div
                className="invisible absolute text-start px-1 top-16 right-0 w-48 z-50 flex  rounded-lg  flex-col bg-gray-100 py-2 text-gray-800 shadow-xl group-hover:visible">

                <Link href="/things-we-do" className="text-gray-700 hover:bg-slate-300 rounded-lg px-2 py-2 ">
                  Things we do
                </Link>
                <Link href="/pricing" className="text-gray-700 hover:bg-slate-300 rounded-lg px-2 py-2 ">
                  Pricing
                </Link>
                <Link href="/subscription" className="text-gray-700 hover:bg-slate-300 rounded-lg px-2 py-2 ">
                  Subscription
                </Link>
                <Link href="/faq" className="text-gray-700 hover:bg-slate-300 rounded-lg px-2 py-2 ">
                  FAQ
                </Link>
                <Link href="/business" className="text-gray-700 hover:bg-slate-300 rounded-lg px-2 py-2 ">
                  Choreless for Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar