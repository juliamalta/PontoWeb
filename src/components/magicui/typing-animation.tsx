'use client'

import { motion, MotionProps, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

interface TypingAnimationProps extends MotionProps {
    children: string
    className?: string
    duration?: number
    delay?: number
    as?: React.ElementType
    startOnView?: boolean
}

export function TypingAnimation({
    children,
    className,
    duration = 100,
    delay = 0,
    as: Component = 'div',
    startOnView = false,
    ...props
}: TypingAnimationProps) {
    const MotionComponent = useMemo(() => motion.create(Component, { forwardMotionProps: true }), [Component])
    const elementRef = useRef<HTMLElement>(null)
    const isInView = useInView(elementRef, { once: true, amount: 0.25 })
    const reduceMotion = useReducedMotion()
    const [displayedText, setDisplayedText] = useState('')

    useEffect(() => {
        if (reduceMotion || (startOnView && !isInView)) return

        let frame: number
        let startedAt: number | undefined
        const type = (time: number) => {
            startedAt ??= time
            const elapsed = Math.max(0, time - startedAt - delay)
            const length = duration > 0 ? Math.floor(elapsed / duration) : children.length
            setDisplayedText(children.slice(0, length))
            if (length < children.length) frame = requestAnimationFrame(type)
        }

        frame = requestAnimationFrame(type)
        return () => cancelAnimationFrame(frame)
    }, [children, delay, duration, isInView, reduceMotion, startOnView])

    return (
        <MotionComponent
            ref={elementRef}
            className={cn('text-4xl font-bold leading-[5rem] tracking-[-0.02em]', className)}
            {...props}>
            <span className="sr-only">{children}</span>
            <span aria-hidden="true" className="grid">
                <span className="invisible col-start-1 row-start-1">{children}</span>
                <span className="col-start-1 row-start-1 motion-reduce:hidden">{displayedText}</span>
                <span className="col-start-1 row-start-1 hidden motion-reduce:inline">{children}</span>
            </span>
        </MotionComponent>
    )
}
