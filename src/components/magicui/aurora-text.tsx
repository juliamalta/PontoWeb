'use client'

import React, { memo } from 'react'

interface AuroraTextProps {
    children: React.ReactNode
    className?: string
    colors?: string[]
}

export const AuroraText = memo(({ children, className = '', colors = ['#3494F9', '#F8FAFC'] }: AuroraTextProps) => {
    const gradientStyle: React.CSSProperties = {
        backgroundImage: `linear-gradient(to bottom, ${colors.join(', ')})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }

    return (
        <span className={`bg-clip-text text-transparent lg:inline-block ${className}`} style={gradientStyle}>
            {children}
        </span>
    )
})

AuroraText.displayName = 'AuroraText'
