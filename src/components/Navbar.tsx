import Link from 'next/link'
import { WiDayHaze } from "react-icons/wi";

const Navbar = () => {
  return (

    // <header className="flex w-full justify-center px-8 border border-red-400 bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 rounded-2xl shadow-2xl bg-white">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <WiDayHaze size={42} />
            <span className="ml-2 text-xl font-semibold">Choreless</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/things-we-do" className="text-gray-700 hover:text-gray-900">
            Things we do
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/subscription" className="text-gray-700 hover:text-gray-900">
            Subscription
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-gray-900">
            FAQ
          </Link>
          <Link href="/business" className="text-gray-700 hover:text-gray-900">
            Choreless for Business
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/auth/signin" >
            <p className='border border-black rounded-lg px-4 py-2'>Sign in</p>
          </Link>
          <Link href="/schedule-my-pickup" className="px-4 py-2 font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2">
            Schedule my pickup
          </Link>
        </div>
      </div>
    </div>
    // </header>
  )
}

export default Navbar