import Logobar from "@/components/Logobar"
import Link from "next/link"

const SignInPage = () => {
    return (
        <div>

            <div className="flex flex-col justify-center items-center w-full px-4 sm:px-0">
                <div className="flex p-10 justify-start w-full">
                    <Logobar />
                </div>
                <div className="  border-red-500">
                    <div className=" flex flex-col gap-3 items-center  justify-center my-36 bg-white py-8 w-full max-w-lg rounded-3xl shadow-xl">
                        <h1 className="text-3xl font-bold text-black">Forgot Password</h1>
                        <p className="px-8 text-center text-base text-gray-500">
                            Enter your email and we&apos;ll send you instructions for creating a new password.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 w-full px-8">
                            <input type="email" placeholder="Email or phone number" className="w-full p-2 border border-gray-300 rounded-md" />
                            <Link href="/summery" className="w-full text-center p-3 bg-black rounded-full text-lg text-white">
                                <p>Reset Password</p>
                            </Link>

                            <div className="flex gap-2 items-center text-center text-sm text-gray-600">
                                <p> Don&apos;t have an account?</p>
                                <Link href="/auth/signup">
                                    <p className="text-black font-semibold hover:underline">
                                        Sign up
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

             
                    <div className="text-sm  text-gray-500 mt-8 mb-4">
                        © {new Date().getFullYear()} Choreless. All rights reserved.
                    </div>
                 
            </div>
        </div>
    )
}

export default SignInPage