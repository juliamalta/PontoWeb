'use client'

import { motion, useReducedMotion } from 'motion/react'
import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

type RevealProps = {
    children: ReactNode
    className?: string
    delay?: number
    distance?: number
    scale?: number
}

export function Reveal({ children, className, delay = 0, distance = 24, scale = 1 }: RevealProps) {
    const reduceMotion = useReducedMotion()

    return (
        <motion.div
            className={cn('motion-reduce:!transform-none motion-reduce:!opacity-100', className)}
            initial={{ opacity: 0, y: distance, scale }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : delay,
                ease: [0.22, 1, 0.36, 1],
            }}>
            {children}
        </motion.div>
    )
}
