export const cardHoverAnimation = {
    whileHover: {
        y: -8,
        scale: 1.02,
    },
    transition: {
        type: 'spring',
        stiffness: 200,
        damping: 18,
    },
}

export const imageHoverAnimation = {
    scale: 1.1,
    transition: {
        duration: 0.5,
    },
}

export const tagHoverAnimation = {
    scale: 1.08,
}

export const titleHoverAnimation = {
    x: 4,
    transition: {
        duration: 0.3,
    },
}
