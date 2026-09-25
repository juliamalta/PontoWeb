'use client'

import { useReducedMotion } from 'motion/react'
import { type PointerEvent } from 'react'

import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, icon, title }: CardProps) {
    const reduceMotion = useReducedMotion()

    const moveSpotlight = (event: PointerEvent<HTMLDivElement>) => {
        if (reduceMotion || event.pointerType !== 'mouse') return
        const card = event.currentTarget
        const bounds = card.getBoundingClientRect()
        card.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`)
        card.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`)
    }

    return (
        <div
            onPointerMove={moveSpotlight}
            className="group relative h-full overflow-hidden rounded-3xl border-2 border-[#212121] bg-color-codgray shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:border-color-denim hover:shadow-[0_12px_40px_-20px_rgba(7,90,210,0.4)] motion-safe:hover:-translate-y-1 motion-reduce:transition-none">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden [@media(hover:none)]:hidden"
                style={{
                    background:
                        'radial-gradient(320px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(52, 148, 249, 0.14), transparent 70%)',
                }}
            />
            <div className="relative flex min-h-72 items-center">
                <div className="flex w-full flex-col gap-5 rounded-lg px-6 py-5">
                    <div
                        className="flex size-11 items-center justify-center rounded-xl transition-transform duration-300 motion-safe:group-hover:scale-110 motion-reduce:transition-none"
                        style={{ backgroundColor: 'rgba(7, 90, 210, 0.15)' }}>
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">{title}</h3>
                    </div>
                    <div className="w-full">
                        <p className="text-sm font-normal text-white">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPrimary
