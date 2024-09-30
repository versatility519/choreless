import Logobar from "@/components/Logobar"
import Social from "@/components/Social"
import Link from "next/link"

const SignInPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4 sm:px-0">
            <div className="flex p-10 justify-start w-full">
                <Logobar />
            </div>
            <div className="flex flex-col gap-3 items-center justify-center bg-white py-8 w-full max-w-lg  md:my-16 rounded-3xl shadow-xl">
                <h1 className="text-3xl font-bold text-black">Hello there!</h1>
                <p className="text-base text-center text-gray-500">Enter your email to sign in to your account</p>
                <div className="flex flex-col items-center justify-center gap-4 w-full px-8">
                    <input type="email" placeholder="Email or phone number" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded-md" />

                    <Link href="/summery" className="w-full p-2 bg-black text-center rounded-full text-lg text-white">
                        Login
                    </Link>

                    <div className="text-center">
                        <Link href="/auth/forgot-password">
                            <p className="text-sm text-gray-600 underline">
                                Forgot password?
                            </p>
                        </Link>
                    </div>
                    <div className="flex gap-2 items-center text-center text-sm text-gray-600">
                        <p> Don&apos;t have an account?</p>
                        <Link href="/auth/signup">
                            <p className="text-black font-semibold hover:underline">
                                Sign up
                            </p>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full text-black border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-500">Or</span>
                        </div>
                    </div>

                    <Social />

                </div>
            </div>

            <footer>
                <p className="text-sm text-gray-500 mt-8">
                    © {new Date().getFullYear()} Choreless. All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default SignInPage