import React from 'react'
import { useState } from 'react'

export default function Hamburger() {
    const [isOpened, setIsOpened] = useState<boolean>(false)

    function clickHandler() {
        setIsOpened(!isOpened)
    }
    return (
        <div className="md:hidden text-display">
            <button
                onClick={clickHandler}
                id="hamburger"
                className="focus:outline-none"
            >
                {' '}
                &#9776;{' '}
            </button>

            <div className="isolation absolute inset-0 bg-black bg-opacity-25 w-2/3 ml-auto rounded-l-3xl rounded-bl-3xl">
                {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" size-8"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        {' '}
                        <g clip-path="url(#clip0_429_11083)">
                            {' '}
                            <path
                                d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                                stroke="#ffffff"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>{' '}
                        </g>{' '}
                        <defs>
                            {' '}
                            <clipPath id="clip0_429_11083">
                                {' '}
                                <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                ></rect>{' '}
                            </clipPath>{' '}
                        </defs>{' '}
                    </g>
                </svg> */}
                <ul className="flex flex-col gap-16 text-display w-full items-end h-full bg-opacity-20 justify-center text-3xl pr-8">
                    <li className="hover:-translate-y-[0.1rem] transition-transform">
                        <a href="/tech">Tech</a>
                    </li>
                    <li className="hover:-translate-y-[0.1rem] transition-transform">
                        <a href="/life">Life</a>
                    </li>
                    <li className="hover:-translate-y-[0.1rem] transition-transform">
                        <a href="/about">About</a>
                    </li>
                    <li className="text-subtitle">
                        <a href="/portfolio">Portfolio</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
