import Link from 'next/link'
import React from 'react'

const LandingNavbar = () => {
    return (
        <div>
            <header className="">
                <div className="mx-auto justify-between w-full flex h-16 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-0">
                    <Link className="block " href="/">
                        <span className="sr-only">Home</span>
                        <h5 className='text-xl font-bold uppercase'>ChatApp</h5>
                    </Link>

                    <div className="flex w-full items-center justify-end ">
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn">
                                        Theme
                                        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default" /></li>
                                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" /></li>
                                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk" /></li>
                                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine" /></li>
                                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua" /></li>
                                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light" /></li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Dark"
                                                value="dark"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Halloween"
                                                value="halloween"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Forest"
                                                value="forest"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Luxury"
                                                value="luxury"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Business"
                                                value="business"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Coffee"
                                                value="coffee"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Dim"
                                                value="dim"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Sunset"
                                                value="sunset"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Synthwave"
                                                value="synthwave"
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label="Black"
                                                value="black"
                                            />
                                        </li>
                                    </ul>


                                </div>
                                <Link
                                    className=" h-auto rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 flex items-center justify-center"
                                    href="/login"
                                >
                                    Login
                                </Link>

                                <Link
                                    className="hidden  items-center justify-center rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:text-red-600/75 sm:flex"
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