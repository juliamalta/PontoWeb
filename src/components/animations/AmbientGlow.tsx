'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

import { cn } from '@/lib/utils'

export function AmbientGlow({ className }: { className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref)
    const reduceMotion = useReducedMotion()
    const animate = isInView && !reduceMotion

    return (
        <motion.div
            ref={ref}
            aria-hidden="true"
            className={cn('pointer-events-none absolute inset-0 motion-reduce:!transform-none', className)}
            style={{ background: 'radial-gradient(ellipse at center, rgba(7, 90, 210, 0.22), transparent 65%)' }}
            initial={false}
            animate={animate ? { opacity: [0.45, 0.85, 0.45], scale: [1, 1.08, 1] } : { opacity: 0.55, scale: 1 }}
            transition={{ duration: animate ? 9 : 0, repeat: animate ? Infinity : 0, ease: 'easeInOut' }}
        />
    )
}
