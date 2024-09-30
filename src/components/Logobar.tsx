import Link from 'next/link'
import { GiLovers } from "react-icons/gi";

const Logobar = () => {
  return (

    <div className="flex justify-between items-center p-8">
      {/* <div className="flex items-center"> */}
        <Link href="/" className="flex items-center">
          <GiLovers size={32} />
          <span className="ml-2 text-black text-3xl font-semibold">Choreless</span>
        </Link>
      {/* </div> */}

    </div>
  )
}

export default Logobar