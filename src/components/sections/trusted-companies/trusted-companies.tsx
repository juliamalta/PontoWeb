import { Marquee } from '@/components/magicui/marquee'
import { trustedCompaniesDefaults } from '@/content/home-defaults'

interface TrustedCompaniesProps {
    title?: string
    companyLogos?: {
        id?: string | null
        logo: string
        img?: string | null
        alt: string
        width: number
    }[]
}

// Logos ilustrativos, como na referência. Substitua pelas marcas dos clientes.
const companyLogos = [
    {
        id: 'wordmark',
        width: 112,
        artwork: (
            <text x="0" y="26" fontSize="23" fontWeight="800" letterSpacing="-1.1">
                logoipsum
            </text>
        ),
    },
    {
        id: 'fingerprint',
        width: 40,
        artwork: (
            <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M20 29H15a12 12 0 0 1 0-24h10a12 12 0 0 1 0 24h-1l-9-7" />
                <path d="M17 26h-2a9 9 0 0 1 0-18h10a9 9 0 0 1 0 18h-1l-8-7" />
                <path d="M14 22a6 6 0 0 1 1-12h10a6 6 0 0 1 0 12h-1l-7-5" />
                <path d="M14 19a3 3 0 0 1 1-6h10a3 3 0 0 1 0 6h-1l-4-3h-5" />
            </g>
        ),
    },
    {
        id: 'fox',
        width: 138,
        artwork: (
            <>
                <text x="0" y="25" fontSize="22" fontWeight="700" letterSpacing="-1">
                    logo
                </text>
                <path d="m47 5 9 2 8-2 8 2-4 8-4 11-7 6-7-7-3-10-4-8Zm5 10 4 5 2-5Zm9 0 2 5 4-5Z" fillRule="evenodd" />
                <text x="76" y="25" fontSize="22" fontWeight="700" letterSpacing="-1">
                    ipsum
                </text>
            </>
        ),
    },
    {
        id: 'monogram',
        width: 38,
        artwork: <path d="M3 3h15l17 17v13H24V22L14 12v21H3Zm23 0h9v10Z" />,
    },
    {
        id: 'ipsum',
        width: 102,
        artwork: (
            <text x="0" y="27" fontSize="28" fontWeight="900" fontStyle="italic" letterSpacing="-1.8">
                IPSUM
            </text>
        ),
    },
    {
        id: 'globe',
        width: 152,
        artwork: (
            <>
                <text x="0" y="25" fontSize="22" fontWeight="700" letterSpacing="-1">
                    logo
                </text>
                <g fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="68" cy="18" r="13" />
                    <ellipse cx="68" cy="18" rx="6" ry="13" />
                    <ellipse cx="68" cy="18" rx="13" ry="5" />
                    <path d="M55 18h26M68 5v26" />
                </g>
                <text x="85" y="25" fontSize="22" fontWeight="700" letterSpacing="-1">
                    ipsum
                </text>
            </>
        ),
    },
    {
        id: 'stamp',
        width: 54,
        artwork: (
            <g transform="rotate(-18 27 18)" fontWeight="900" textAnchor="middle">
                <text x="27" y="16" fontSize="13" letterSpacing="-0.8">
                    LOGO
                </text>
                <text x="27" y="28" fontSize="12" letterSpacing="-0.8">
                    IPSUM
                </text>
                <path d="m7 6 3-3 2 4Zm33 23 4 1-3 3Z" />
            </g>
        ),
    },
    {
        id: 'loops',
        width: 108,
        artwork: (
            <g fill="none" stroke="currentColor" strokeWidth="5.5">
                <path d="M3 7v13a6 6 0 0 0 6 6h10" />
                <circle cx="31" cy="18" r="9" />
                <rect x="46" y="9" width="36" height="18" rx="9" />
                <circle cx="98" cy="18" r="8" />
            </g>
        ),
    },
    {
        id: 'hexagon',
        width: 96,
        artwork: (
            <>
                <path d="m2 11 8-4 8 4v14l-8 4-8-4Zm8 0v14l5-3V14Z" fillRule="evenodd" />
                <text x="24" y="23" fontSize="13" fontWeight="800" letterSpacing="-0.5">
                    logoipsum
                </text>
            </>
        ),
    },
]

export function TrustedCompanies({
    title = trustedCompaniesDefaults.title,
    companyLogos: logos = trustedCompaniesDefaults.companyLogos,
}: TrustedCompaniesProps) {
    return (
        <section aria-label={title} className="overflow-hidden bg-color-codgray py-24">
            <h2 className="mb-6 text-center text-xs font-normal text-color-shuttlegray">{title}</h2>
            <Marquee
                pauseOnHover
                repeat={2}
                tabIndex={0}
                role="group"
                aria-label="Logos das empresas"
                className="w-full p-0 text-[#3f4555] outline-offset-4 [--duration:35s] [--gap:2.5rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-color-denim motion-reduce:overflow-x-auto sm:[--gap:3rem] [&>div]:min-w-full [&>div]:items-center">
                {logos.map(({ id, logo, img, alt, width }, index) => {
                    if (img) {
                        return (
                            <img
                                key={id || index}
                                src={img}
                                alt={alt}
                                width={width}
                                height={36}
                                className="h-8 shrink-0 object-contain"
                            />
                        )
                    }

                    const illustration = companyLogos.find((item) => item.id === logo) || companyLogos[0]
                    return (
                        <svg
                            key={id || index}
                            role="img"
                            aria-label={alt}
                            width={width}
                            height="36"
                            viewBox={`0 0 ${illustration.width} 36`}
                            fill="currentColor"
                            className="h-8 shrink-0 font-sans">
                            {illustration.artwork}
                        </svg>
                    )
                })}
            </Marquee>
        </section>
    )
}
