import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '2rem',
                lg: '3rem',
            },
        },
        extend: {
            animation: {
                marquee: 'marquee var(--duration) linear infinite',
                'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
                'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
            },
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - var(--gap)))' },
                },
                'marquee-vertical': {
                    from: { transform: 'translateY(0)' },
                    to: { transform: 'translateY(calc(-100% - var(--gap)))' },
                },
                'pulse-dot': {
                    '0%, 100%': { transform: 'scale(0.9)', opacity: '0.75' },
                    '50%': { transform: 'scale(1.15)', opacity: '1' },
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
                'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    primary: 'var(--downriver-950)',
                    secondary: 'var(--san-juan-800)',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                brand: {
                    DEFAULT: 'var(--brand-600)',
                    50: 'var(--brand-50)',
                    100: 'var(--brand-100)',
                    200: 'var(--brand-200)',
                    300: 'var(--brand-300)',
                    400: 'var(--brand-400)',
                    500: 'var(--brand-500)',
                    600: 'var(--brand-600)',
                    700: 'var(--brand-700)',
                    800: 'var(--brand-800)',
                    900: 'var(--brand-900)',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                color: {
                    woodsmoke: 'var( --woodsmoke-900)',
                    codgray: 'var(--cod-gray-950)',
                    denim: 'var(--denim-800)',
                    shuttlegray: 'var(--shuttle-gray-500)',
                    frenchgray: 'var( --french-gray-300)',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [tailwindcssAnimate],
}
export default config
