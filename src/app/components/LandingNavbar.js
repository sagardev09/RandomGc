import Link from 'next/link'
import React from 'react'

const LandingNavbar = () => {
    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto justify-between w-full flex h-16 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-0">
                    <Link className="block text-black" href="/">
                        <span className="sr-only">Home</span>
                        <h5 className='text-xl font-bold uppercase'>ChatApp</h5>
                    </Link>

                    <div className="flex w-full items-center justify-end ">
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    className="block rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
                                    href="/login"
                                >
                                    Login
                                </Link>

                                <Link
                                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:text-red-600/75 sm:block"
                                    href="/signup"
                                >
                                    Register
                                </Link>
                            </div>
                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default LandingNavbar