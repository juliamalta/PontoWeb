import Link from 'next/link'

import { AmbientGlow } from '@/components/animations/AmbientGlow'
import { Reveal } from '@/components/animations/Reveal'
import { HyperText } from '@/components/magicui/hyper'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { Button } from '@/components/ui/button'

export function HeroSection({
    title,
    desc,
    button1text,
    button1link,
    button2text,
    button2link,
    titlePrimary,
}: HeroProps) {
    return (
        <>
            <section
                id="inicio"
                className="relative isolate mx-auto overflow-hidden bg-color-codgray bg-cover bg-center px-2 py-16 sm:py-44"
            >
                <AmbientGlow />

                <div className="container relative flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex flex-col items-center gap-6">
                            <Reveal distance={12}>
                                <div className="relative">
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-4 top-1/2 size-2.5 -translate-y-1/2 animate-pulse-dot rounded-full bg-color-denim motion-reduce:animate-none"
                                    />

                                    <HyperText
                                        style={{
                                            backgroundColor: 'rgba(7, 90, 210, 0.1)',
                                        }}
                                        className="flex items-center rounded-2xl py-2 pl-9 pr-4 text-base font-semibold leading-none text-white"
                                    >
                                        {titlePrimary}
                                    </HyperText>
                                </div>
                            </Reveal>

                            <Reveal
                                delay={0.12}
                                className="w-full lg:w-2/3 2xl:w-2/4"
                            >
                                <h1 className="text-3xl font-normal text-white sm:text-center md:text-6xl">
                                    {title}
                                </h1>
                            </Reveal>

                            <Reveal
                                delay={0.24}
                                className="w-full md:w-2/3 lg:w-2/4"
                            >
                                <p className="text-base text-color-frenchgray sm:text-center">
                                    {desc}
                                </p>
                            </Reveal>
                        </div>

                        <Reveal
                            delay={0.36}
                            className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
                        >
                            <InteractiveHoverButton className="rounded-2xl border-color-denim bg-color-denim text-center text-sm text-white hover:text-color-denim">
                                <Link href={button1link}>
                                    {button1text}
                                </Link>
                            </InteractiveHoverButton>

                            <Button
                                variant="herobuttonsecondary"
                                size="hero"
                                asChild
                                className="rounded-2xl text-sm"
                            >
                                <Link href={button2link}>
                                    {button2text}
                                </Link>
                            </Button>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    )
}