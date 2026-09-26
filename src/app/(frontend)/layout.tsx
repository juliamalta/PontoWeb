import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

import '../globals.css'

import { CiMail, CiPhone } from 'react-icons/ci'
import { IoLocationOutline } from 'react-icons/io5'
import { TfiMapAlt } from 'react-icons/tfi'
import { Toaster } from 'sonner'

import { Footer } from '@/components/sections/Footer'
import NavigationHeader from '@/components/sections/Navigations/NavigationHeader'
import { configs } from '@/configs'
import { cn } from '@/lib/utils'

import LogoImage from '../../../public/images/logo.png'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = configs.metadata

type RootLayoutProps = React.PropsWithChildren
const info = [
    {
        title: 'Services',
        items: [
            { text: 'Desenvolvimento de sistemas', link: '/servicos/desenvolvimento-de-sistemas' },
            { text: 'Aplicativos mobile', link: '/servicos/aplicativos-mobile' },
            { text: 'Plataformas web', link: '/servicos/plataformas-web' },
            { text: 'Integrações e automações', link: '/servicos/integracoes-e-automacoes' },
            { text: 'Cloud & infraestrutura', link: '/servicos/cloud-e-infraestrutura' },
        ],
    },
]
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body
                className={cn(
                    'min-h-screen bg-background antialiased',
                    plusJakartaSans.className,
                    inter.variable,
                    plusJakartaSans.variable
                )}>
                <NavigationHeader
                    logo={LogoImage.src}
                    navs={configs.menu}
                    buttonLink="https://www.instagram.com/pontowebb/"
                />
                {children}
                <Footer
                    desc="Desenvolvemos sistemas, aplicativos e soluções digitais sob medida para empresas que buscam inovação, eficiência e crescimento através da tecnologia."
                    info={info}
                    rights="© 2026 PontoWeb. ENGINEERING PRECISION. BUILT FOR THE FUTURE."
                />

                <Toaster richColors position="top-right" />
            </body>
        </html>
    )
}
