import * as React from 'react'

import { Reveal } from '@/components/animations/Reveal'
import CardPrimary from '@/components/core/CardPrimary/CardPrimary'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card1({ cards }: CardSectionProps) {
    return (
        <section id="Serviços" className="bg-color-codgray py-16 sm:pb-24">
            <div className="container mx-auto items-center justify-center 2xl:w-2/3">
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
        </section>
    )
}

export default Card1
