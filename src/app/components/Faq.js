import React from 'react'

const Faq = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20 mb-40'>
            <div className="space-y-4">
                <details
                    className="group border-s-4 border-red-500  shadow-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium ">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>

                        <span className="shrink-0 rounded-full shadow-2xl  p-1.5  sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                        consequuntur distinctio corporis earum similique!
                    </p>
                </details>

                <details
                    className="group border-s-4 border-red-500 shadow-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium ">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>

                        <span className="shrink-0 rounded-full shadow-2xl p-1.5  sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                        consequuntur distinctio corporis earum similique!
                    </p>
                </details>
                <details
                    className="group border-s-4 border-red-500 shadow-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium ">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>

                        <span className="shrink-0 rounded-full shadow-2xl  p-1.5 t sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                        consequuntur distinctio corporis earum similique!
                    </p>
                </details>
            </div>
        </div>
    )
}

export default Faq