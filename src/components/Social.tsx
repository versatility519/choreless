import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Social = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="w-full flex items-center gap-4 p-2 border border-black px-4  rounded-full text-black cursor-pointer">
                <FcGoogle size={28} />
                <p className="text-lg">Continue with Google</p>
            </div>
            <div className="w-full flex items-center gap-4 p-2 border border-black px-4  rounded-full text-black cursor-pointer">
                <FaFacebook size={28} />
                <p className="text-lg">Continue with Facebook</p>
            </div>
            <div className="w-full flex items-center gap-4 p-2 border border-black px-4  rounded-full text-black cursor-pointer">
                <FaApple size={28} />
                <p className="text-lg">Continue with Apple</p>
            </div>
        </div>
    )
}

export default Social