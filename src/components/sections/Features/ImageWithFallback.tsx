'use client'

import type { SyntheticEvent } from 'react'

type ImageWithFallbackProps = {
    src: string
    fallbackSrc: string
    alt: string
    className?: string
}

export function ImageWithFallback({ src, fallbackSrc, alt, className }: ImageWithFallbackProps) {
    function handleError(event: SyntheticEvent<HTMLImageElement>) {
        if (event.currentTarget.src.endsWith(fallbackSrc)) return

        event.currentTarget.src = fallbackSrc
    }

    return <img className={className} src={src} alt={alt} onError={handleError} />
}
