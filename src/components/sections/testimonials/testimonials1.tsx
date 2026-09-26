'use client'

import * as React from 'react'
import { Quote } from 'lucide-react'

import { Reveal } from '@/components/animations/Reveal'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { TestimonialProps } from '@/components/sections/testimonials/testimonials.types'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'

function Testimonials1({ testimonial, title, titlePrimary }: TestimonialProps) {
    const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
    const [selectedIndex, setSelectedIndex] = React.useState(1)

    React.useEffect(() => {
        if (!carouselApi) return

        const updateSelectedIndex = () => setSelectedIndex(carouselApi.selectedScrollSnap())
        updateSelectedIndex()
        carouselApi.on('select', updateSelectedIndex)

        return () => {
            carouselApi.off('select', updateSelectedIndex)
        }
    }, [carouselApi])

    return (
        <section id="depoimentos" className="bg-color-codgray py-16 sm:pb-24">
            <div className="container mx-auto flex flex-col gap-16">
                {/* TÍTULO */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-6">
                        {titlePrimary && (
                            <Reveal distance={12}>
                                <p
                                    className="rounded-2xl px-4 text-base font-semibold text-color-denim"
                                    style={{ backgroundColor: 'rgba(7, 90, 210, 0.1)' }}>
                                    {titlePrimary}
                                </p>
                            </Reveal>
                        )}
                        {title && (
                            <div className="w-full">
                                <TypingAnimation
                                    as="h2"
                                    startOnView
                                    delay={120}
                                    duration={30}
                                    className="text-center text-4xl font-semibold text-white">
                                    {title}
                                </TypingAnimation>
                            </div>
                        )}
                    </div>
                </div>

                {/* DEPOIMENTOS */}
                <Carousel
                    opts={{ align: 'center', loop: true, startIndex: 1 }}
                    setApi={setCarouselApi}
                    className="relative left-1/2 w-screen -translate-x-1/2"
                    aria-label="Depoimentos de clientes">
                    <CarouselContent className="-ml-4 gap-8">
                        {testimonial?.map((card, index) => (
                            <CarouselItem key={index} className="basis-[82vw] pl-4 sm:basis-[34rem] xl:basis-[48rem]">
                                <div className="hover:border-color-flamingo flex min-h-[420px] w-full flex-col items-center bg-[#0F0F0F] p-10 transition-transform hover:scale-105 xl:p-12">
                                    {/* ASPAS */}
                                    <Quote
                                        size={30}
                                        fill="currentColor"
                                        strokeWidth={0}
                                        className="mb-10 text-color-denim"
                                    />
                                    {/* DEPOIMENTO */}
                                    <p className="text-center text-lg leading-relaxed text-white">{card.desc}</p>
                                    {/* CLIENTE */}
                                    <div className="mt-auto pt-10 text-center">
                                        <p className="text-sm font-semibold text-white">{card.name}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 xl:w-52"
                        style={{
                            background:
                                'linear-gradient(to right, var(--cod-gray-950) 0%, rgba(17, 17, 17, 0.88) 34%, transparent 100%)',
                        }}
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 xl:w-52"
                        style={{
                            background:
                                'linear-gradient(to left, var(--cod-gray-950) 0%, rgba(17, 17, 17, 0.88) 34%, transparent 100%)',
                        }}
                    />
                </Carousel>
                <div className="flex items-center justify-center gap-2 pt-2" aria-label="Navegação dos depoimentos">
                    {testimonial?.map((card, index) => (
                        <button
                            key={`${card.name}-${index}`}
                            type="button"
                            aria-label={`Ver depoimento ${index + 1}`}
                            aria-current={selectedIndex === index ? 'true' : undefined}
                            onClick={() => carouselApi?.scrollTo(index)}
                            className={`rounded-full bg-color-denim transition-all duration-300 ${
                                selectedIndex === index
                                    ? 'ring-color-denim/40 size-2.5 scale-125 opacity-100 ring-1 ring-offset-1 ring-offset-color-codgray'
                                    : 'size-2 opacity-40'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials1
