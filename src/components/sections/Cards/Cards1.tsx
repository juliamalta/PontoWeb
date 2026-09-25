import { Reveal } from '@/components/animations/Reveal'
import CardPrimary from '@/components/core/CardPrimary/CardPrimary'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import type { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card1({ cards, titlePrimary, title, desc }: CardSectionProps) {
    return (
        <section id="Serviços" className="bg-color-codgray py-16 sm:pb-24">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8 2xl:gap-16">
                <div className="flex flex-col gap-8 lg:w-2/3">
                    <div className="flex flex-col items-center gap-6">
                        <Reveal distance={16}>
                            <p className="text-base font-semibold text-color-frenchgray">{titlePrimary}</p>
                        </Reveal>
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
                    {desc && (
                        <Reveal delay={0.15} className="flex flex-col items-center justify-center gap-8">
                            <p className="text-center text-base font-normal text-color-frenchgray 2xl:w-2/3">{desc}</p>
                        </Reveal>
                    )}
                </div>

                <div className="w-full">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                        {cards?.map((card, index) => (
                            <Reveal key={index} delay={index * 0.12} className="h-full">
                                <CardPrimary
                                    icon={card.icon}
                                    title={card.title}
                                    text={card.text}
                                    iconBgColor={card.iconBgColor}
                                />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card1
