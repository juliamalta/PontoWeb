export const metadataConfig = {
    title: 'PontoWeb | Desenvolvimento Web e Mobile',

    description:
        'Criamos experiências digitais que transformam visitantes em clientes. Design sofisticado e tecnologia avançada para marcas que querem se destacar. Fale com a PontoWeb!',

    openGraph: {
        siteName: 'PontoWeb | Desenvolvimento Web e Mobile',
        images: [
            {
                url: '/img/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'PontoWeb | Desenvolvimento Web e Mobile',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        site: '@PontoWeb',
    },

    icons: {
        icon: [
            {
                url: '/favicon/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/favicon/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                url: '/favicon/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],

        shortcut: '/favicon/favicon.ico',
        apple: '/favicon/apple-touch-icon.png',
    },

    manifest: '/favicon/site.webmanifest',

    robots: {
        index: true,
        follow: true,
    },

    sitemap: 'sitemap.xml',

    appleWebApp: {
        title: 'PontoWeb',
    },
}
