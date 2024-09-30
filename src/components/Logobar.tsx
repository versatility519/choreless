import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/public/images/logo.png"

const Logobar = () => {
  return (

    <div className="flex justify-center items-start  ">
      {/* <div className="flex items-center"> */}
        <Link href="/" className="flex items-center">
            <Image src={Logo} alt="logo" className='w-40' />
        </Link>
      {/* </div> */}

    </div>
  )
}

export default Logobar