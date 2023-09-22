import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] });

const customerDate = {
    name: "Banana Company",
    logo: "https://th.bing.com/th/id/OIP.dXqW6Alytdvc8X19i1DbTQHaCr?pid=ImgDet&rs=1",
    styles: {
        primaryColor: "#FCF4A3",
        secondaryColor: "#9F5E33"
    }
}

const opList = [
    { name: "Home", link: "/home" },
    { name: "O que é", link: "/o-que-e" },
    { name: "Outra opção aqui", link: "/outra-op" },
]

export default function Header() {
    return (
        <header>
            <nav
                className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <button
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="[&>svg]:w-7">
                            <Image src={customerDate.logo} alt={customerDate.name} width={50} height={50} />
                        </span>
                    </button>

                    <div
                        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent1"
                        data-te-collapse-item>
                        <a
                            className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                            href="#">
                            <img
                                src={customerDate.logo}
                                style={{ height: "15px" }}
                                alt="TE Logo"
                                loading="lazy" />
                        </a>
                        <ul
                            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                            data-te-navbar-nav-ref>
                            {opList.map((opItem) => {
                                return (
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <a
                                            className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                            href={opItem.link}
                                            data-te-nav-link-ref
                                        >{opItem.name}
                                        </a>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>

                    <div className="flex items-center justify-center">
                        <Image
                            src={customerDate.logo}
                            alt={customerDate.name}
                            width={100}
                            height={50}
                        />
                    </div>

                    <div className="relative flex items-center">
                        <div
                            className="relative flex flex-row space-x-5"
                            data-te-dropdown-ref
                            data-te-dropdown-alignment="end">
                            <a
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                href="#"
                                id="dropdownMenuButton2"
                                role="button"
                                data-te-dropdown-toggle-ref
                                aria-expanded="false">
                                Login
                            </a>
                            <a
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                href="#"
                                id="dropdownMenuButton2"
                                role="button"
                                data-te-dropdown-toggle-ref
                                aria-expanded="false">
                                Cadastrar
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
