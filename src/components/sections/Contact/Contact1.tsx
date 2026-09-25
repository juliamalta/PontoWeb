import Link from 'next/link'

import { AmbientGlow } from '@/components/animations/AmbientGlow'
import { Reveal } from '@/components/animations/Reveal'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { Contact1Props } from '@/components/sections/Contact/Contact1.types'

function Contact1({
    titlePrimary,
    title,
    desc,
    buttonText,
    buttonLink = 'https://wa.me/5531996398460',
}: Contact1Props) {
    return (
        <section id="contact" className="relative isolate overflow-hidden bg-color-codgray">
            <AmbientGlow />
            <div className="container relative py-24">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center justify-center gap-5">
                        {titlePrimary && (
                            <Reveal distance={12}>
                                <p
                                    className="rounded-2xl px-4 text-base font-semibold text-color-denim"
                                    style={{ backgroundColor: 'rgba(7, 90, 210, 0.1)' }}>
                                    {titlePrimary}
                                </p>
                            </Reveal>
                        )}
                        <Reveal className="w-full" delay={0.1}>
                            <h2 className="w-full text-center text-3xl font-bold text-white sm:text-center md:text-5xl">
                                {title}
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2} className="w-full 2xl:w-1/3">
                            <p className="text-center text-color-frenchgray">{desc}</p>
                        </Reveal>
                    </div>
                    <Reveal
                        delay={0.3}
                        className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                        <InteractiveHoverButton className="rounded-2xl border-color-denim bg-color-denim text-center text-sm text-white hover:text-color-denim">
                            <Link href={buttonLink}> {buttonText}</Link>
                        </InteractiveHoverButton>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Contact1
