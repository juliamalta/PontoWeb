import Image from 'next/image'
import Link from 'next/link'
import { CiPhone } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'
import { IoLocationOutline } from 'react-icons/io5'
import { TfiMapAlt } from 'react-icons/tfi'

import logo from '../../../../public/images/logo.png'
import { FooterProps } from './Footer.types'

function Footer({ info, rights, desc }: FooterProps) {
    return (
        <section
            id="footer"
            className="overflow-hidden bg-color-codgray pt-24"
            style={{
                backgroundImage: "url('/images/Union.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <div className="container mx-auto mt-16 flex flex-col justify-between sm:flex-row lg:flex-row">
                {/* Logo and description section */}
                <div className="mb-10 w-full md:w-1/4 lg:w-auto">
                    <div className="flex items-start">
                        <Link className="block max-w-max" href="/">
                            <img className="h-auto w-60 object-contain" src={logo.src} alt="" />
                        </Link>
                    </div>
                    <div className="flex items-start">
                        <p className="text-base font-normal text-color-frenchgray 2xl:w-2/4">{desc}</p>
                    </div>
                </div>

                {/* Footer navigation and contact info */}

                {/* Location Info */}
                <div className="flex flex-col gap-8 xl:flex-row">
                    {info.map((item) => (
                        <div key={item.title} className="flex flex-col gap-4 px-2 lg:p-0">
                            <p className="text-xl text-white">{item.title}</p>

                            {item.items.map((content) =>
                                content.link ? (
                                    <a
                                        key={content.text}
                                        href={content.link}
                                        className="text-sm text-color-frenchgray md:text-base">
                                        {content.text}
                                    </a>
                                ) : (
                                    <p key={content.text} className="text-sm text-color-frenchgray md:text-base">
                                        {content.text}
                                    </p>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright and Social Media Links */}
            <div className="container mx-auto mt-16">
                <div className="flex flex-wrap items-center border-t border-gray-600 py-12">
                    <div className="mb-6 w-full md:mb-0 md:w-1/2">
                        <p className="text-sm text-white md:text-base">{rights}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
