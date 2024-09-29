import Logobar from "@/components/Logobar"
import Link from "next/link"

const SignInPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4 sm:px-0">
            <Logobar />

            <div className="flex flex-col gap-3 items-center  justify-center my-36 bg-white py-8 w-full max-w-lg rounded-3xl shadow-xl">
                <h1 className="text-3xl font-bold">Forgot Password</h1>
                <p className="px-8 text-center text-base text-gray-500">
                    Enter your email and we&apos;ll send you instructions for creating a new password.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 w-full px-8">
                    <input type="email" placeholder="Email or phone number" className="w-full p-2 border border-gray-300 rounded-md" />

                    <button className="w-full p-2 bg-black rounded-full text-lg text-white">Reset Password</button>
                     
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
    )
}

export default SignInPage