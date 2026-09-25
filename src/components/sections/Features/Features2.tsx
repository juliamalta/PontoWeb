import Link from 'next/link'

import { Reveal } from '@/components/animations/Reveal'
import CardFeatures2 from '@/components/core/CardFeatures/CardFeatures2'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { FeaturesProps } from '@/components/sections/Features/Features.types'
import { Button } from '@/components/ui/button'

function Features2({
    title,
    desc,
    features1,
    img,
    metrics,
    buttonText,
    buttonLink = '#trabalho',
}: FeaturesProps) {
    return (
        <section id="features">
            <div className="bg-color-codgray">
                <div className="container py-24">
                    <div className="flex flex-col gap-12 rounded-3xl bg-color-woodsmoke p-8 lg:flex-row lg:p-16">
                        {/* ESQUERDA */}
                        <div className="flex flex-1 flex-col justify-between gap-8">
                            <Reveal className="flex flex-col gap-6">
                                <h2 className="w-full text-center text-4xl font-semibold text-white lg:text-left 2xl:text-5xl">
                                    {title}
                                </h2>

                                <p className="text-base font-normal text-color-frenchgray">
                                    {desc}
                                </p>
                            </Reveal>

                            <div className="flex flex-col gap-2 px-2">
                                {features1.map((feature, index) => (
                                    <Reveal
                                        key={index}
                                        delay={0.1 + index * 0.1}
                                        distance={16}
                                    >
                                        <CardFeatures2
                                            title={feature.title}
                                        />
                                    </Reveal>
                                ))}
                            </div>

                            <Reveal
                                delay={0.25}
                                className="flex w-full lg:items-start lg:justify-start"
                            >
                                <Button
                                    variant="herobuttonsecondary"
                                    size="hero"
                                    asChild
                                    className="w-full rounded-md bg-color-denim px-6 py-2 text-white hover:bg-color-denim hover:text-black lg:w-fit"
                                >
                                    <Link href={buttonLink}>
                                        {buttonText}
                                    </Link>
                                </Button>
                            </Reveal>
                        </div>

                        {/* DIREITA */}
                        <Reveal
                            delay={0.12}
                            className="group flex flex-1 flex-col overflow-hidden rounded-3xl border border-[#212121] bg-[#161616]"
                        >
                            <div className="h-[360px] w-full overflow-hidden">
                                <img
                                    src={img}
                                    alt="Aplicativos com painéis de indicadores digitais"
                                    className="size-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025] motion-reduce:transition-none"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-2 px-3 py-8 text-center sm:gap-4 sm:px-6 sm:py-10">
                                {metrics?.map((metric, index) => {
                                    const numericValue =
                                        metric.value.match(
                                            /^(\+?)(\d+)(%?)$/,
                                        )

                                    return (
                                        <Reveal
                                            key={index}
                                            delay={0.15 + index * 0.1}
                                            distance={12}
                                            scale={0.94}
                                        >
                                            <p className="text-2xl font-bold text-color-denim sm:text-3xl lg:text-4xl">
                                                {numericValue ? (
                                                    <NumberTicker
                                                        value={Number(
                                                            numericValue[2],
                                                        )}
                                                        prefix={
                                                            numericValue[1]
                                                        }
                                                        suffix={
                                                            numericValue[3]
                                                        }
                                                        delay={
                                                            0.25 +
                                                            index * 0.1
                                                        }
                                                    />
                                                ) : (
                                                    metric.value
                                                )}
                                            </p>

                                            <p className="mt-2 break-words text-[10px] uppercase leading-relaxed text-color-frenchgray sm:text-xs sm:leading-tight">
                                                {metric.title}

                                                {metric.subtitle && (
                                                    <>
                                                        <br />
                                                        {metric.subtitle}
                                                    </>
                                                )}
                                            </p>
                                        </Reveal>
                                    )
                                })}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features2