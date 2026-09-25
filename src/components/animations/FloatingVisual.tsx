'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { type ReactNode, useRef } from 'react'

import { cn } from '@/lib/utils'

export function FloatingVisual({ children, className }: { children: ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref)
    const reduceMotion = useReducedMotion()
    const animate = isInView && !reduceMotion

    return (
        <motion.div
            ref={ref}
            className={cn('motion-reduce:!transform-none', className)}
            initial={false}
            animate={{ y: animate ? [0, -8, 0] : 0 }}
            transition={{ duration: animate ? 6 : 0, repeat: animate ? Infinity : 0, ease: 'easeInOut' }}>
            {children}
        </motion.div>
    )
}
