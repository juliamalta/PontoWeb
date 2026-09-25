'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Progress({ className, value, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
    return (
        <ProgressPrimitive.Root
            data-slot="progress"
            className={cn('bg-color-blue relative h-2 w-full overflow-hidden rounded-full', className)}
            {...props}>
            <ProgressPrimitive.Indicator
                data-slot="progress-indicator"
                className="from-color-studio to-color-persianBlue h-full w-full flex-1 bg-gradient-to-r transition-all"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    )
}

export { Progress }
