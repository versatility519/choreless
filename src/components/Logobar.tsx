import Link from 'next/link'
import { WiDayHaze } from "react-icons/wi";

const Logobar = () => {
  return (

    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <WiDayHaze size={56} />
          <span className="ml-2 text-3xl font-semibold">Choreless</span>
        </Link>
      </div>

    </div>
  )
}

export default Logobar