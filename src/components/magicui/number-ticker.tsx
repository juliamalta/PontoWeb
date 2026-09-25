'use client'

import { animate, useInView, useReducedMotion } from 'motion/react'
import { ComponentPropsWithoutRef, useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

interface NumberTickerProps extends ComponentPropsWithoutRef<'span'> {
    value: number
    startValue?: number
    direction?: 'up' | 'down'
    delay?: number
    decimalPlaces?: number
    prefix?: string
    suffix?: string
}

export function NumberTicker({
    value,
    startValue = 0,
    direction = 'up',
    delay = 0,
    className,
    decimalPlaces = 0,
    prefix = '',
    suffix = '',
    ...props
}: NumberTickerProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const reduceMotion = useReducedMotion()
    const initialValue = direction === 'down' ? value : startValue
    const finalValue = direction === 'down' ? startValue : value
    const finalText = `${prefix}${finalValue.toLocaleString('pt-BR', {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    })}${suffix}`

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const format = (number: number) =>
            `${prefix}${number.toLocaleString('pt-BR', {
                minimumFractionDigits: decimalPlaces,
                maximumFractionDigits: decimalPlaces,
            })}${suffix}`

        if (reduceMotion) {
            element.textContent = format(finalValue)
            return
        }

        element.textContent = format(initialValue)
        if (!isInView) return

        const controls = animate(initialValue, finalValue, {
            duration: 1.5,
            delay,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (latest) => {
                element.textContent = format(latest)
            },
        })

        return () => controls.stop()
    }, [isInView, reduceMotion, initialValue, finalValue, delay, decimalPlaces, prefix, suffix])

    return (
        <span className={cn('inline-block tabular-nums', className)} {...props}>
            <span className="sr-only">{finalText}</span>
            <span ref={ref} aria-hidden="true">
                {finalText}
            </span>
        </span>
    )
}
