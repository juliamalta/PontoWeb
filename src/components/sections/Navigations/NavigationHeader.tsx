'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { NavigationHeaderProps } from './NavigationHeader.types'

function NavigationHeader({ logo, navs, buttonLink }: NavigationHeaderProps) {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNavOpened = () => {
        setIsNavOpen((prev) => !prev)
    }

    const handleMobileNavigation = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        setIsNavOpen(false)

        // Links internos da página
        if (link.startsWith('#')) {
            event.preventDefault()

            const id = link.replace('#', '')
            const element = document.getElementById(id)

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                })
            }
        }
    }

    return (
        <section className="sticky top-0 z-30 bg-[#111111]">
            {/* HEADER */}
            <nav className="container flex items-center justify-between py-6">
                {/* LOGO */}
                <div className="flex items-start">
                    <Link className="block max-w-max" href="/">
                        <Image width={240} height={73} src={logo} alt="PontoWeb" />
                    </Link>
                </div>

                {/* MENU DESKTOP */}
                <div className="hidden justify-center lg:flex">
                    <ul className="flex flex-row items-center justify-between gap-16">
                        {navs?.map(({ text, link }, index) => (
                            <li key={`nav-desk-${index}`}>
                                <Link
                                    href={link}
                                    className="hover:text-color-boulder text-base text-white transition-colors">
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* BOTÃO DESKTOP */}
                <div className="hidden justify-end lg:flex">
                    <Link
                        href={buttonLink || '#contato'}
                        className="hover:text-color-studio pointer-events-auto relative flex w-full items-center justify-center gap-3 rounded-full bg-color-denim px-5 py-3 text-sm font-semibold text-white transition hover:bg-white sm:w-fit sm:text-base 2xl:text-base">
                        <span className="whitespace-nowrap text-sm">Fale conosco</span>
                    </Link>
                </div>

                {/* BOTÃO MENU MOBILE */}
                <button
                    type="button"
                    aria-label="Abrir menu"
                    aria-expanded={isNavOpen}
                    className="navbar-burger lg:hidden"
                    onClick={toggleNavOpened}>
                    <svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className="text-color-studio" width="32" height="32" rx="6" fill="currentColor" />

                        <path
                            className="text-gray-300"
                            d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </nav>

            {/* OVERLAY MOBILE */}
            <div
                onClick={() => setIsNavOpen(false)}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 lg:hidden ${
                    isNavOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
            />

            {/* MENU MOBILE */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-4/6 max-w-xs bg-color-codgray transition-transform duration-300 ease-in-out lg:hidden ${
                    isNavOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <nav className="relative flex h-full flex-col overflow-y-auto p-6">
                    {/* LOGO MOBILE */}
                    <Link href="/" className="mb-10 inline-block" onClick={() => setIsNavOpen(false)}>
                        <Image width={172} height={73} src={logo} alt="PontoWeb" />
                    </Link>

                    {/* LINKS MOBILE */}
                    <ul className="flex flex-col gap-4">
                        {navs?.map(({ text, link }, index) => (
                            <li key={`nav-mobile-${index}`}>
                                <Link
                                    href={link}
                                    scroll={false}
                                    onClick={(event) => handleMobileNavigation(event, link)}
                                    className="hover:bg-color-studio block rounded-md px-4 py-3 font-medium text-gray-300 transition-colors hover:text-white">
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* BOTÃO MOBILE */}
                    <div className="mt-auto pt-8">
                        <Button
                            className="w-full rounded-md bg-color-denim px-6 py-2 text-white hover:bg-color-denim"
                            asChild>
                            <Link href={buttonLink || '#contato'} onClick={() => setIsNavOpen(false)}>
                                Fale conosco
                            </Link>
                        </Button>
                    </div>

                    {/* FECHAR */}
                    <button
                        type="button"
                        aria-label="Fechar menu"
                        className="absolute right-4 top-4 p-2"
                        onClick={() => setIsNavOpen(false)}>
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.94 6L11.14 1.806a.993.993 0 0 0-1.414-1.414L6 4.586 1.806.392A.993.993 0 0 0 .392 1.806L4.586 6 .392 10.194a.993.993 0 1 0 1.414 1.414L6 7.414l4.194 4.194a.993.993 0 1 0 1.414-1.414L7.414 6Z"
                                fill="#D2D2D2"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
        </section>
    )
}

export default NavigationHeader
