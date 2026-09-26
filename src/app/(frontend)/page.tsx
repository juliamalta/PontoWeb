import config from '@payload-config'

import { getPayload } from 'payload'

import type { IconType } from 'react-icons'
import { CiMobile1 } from 'react-icons/ci'
import { MdOutlineColorize } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'

import { AuroraText } from '@/components/magicui/aurora-text'
import Cards1 from '@/components/sections/Cards/Cards1'
import Contact1 from '@/components/sections/Contact/Contact1'
import Features1 from '@/components/sections/Features/Features1'
import Features2 from '@/components/sections/Features/Features2'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustedCompanies } from '@/components/sections/trusted-companies'

import {
    cards1Defaults,
    contact1Defaults,
    features1Defaults,
    features2Defaults,
    testimonials1Defaults,
    trustedCompaniesDefaults,
} from '@/content/home-defaults'
import Testimonials1 from '@/components/sections/testimonials/testimonials1'

const cardIcons: Record<string, IconType> = {
    TbWorld,
    CiMobile1,
    MdOutlineColorize,
}

export default async function Home() {
    const payload = await getPayload({ config })

    const [
        heroResult,
        companiesResult,
        features1Result,
        cards1Result,
        features2Result,
        testimonials1Result,
        contact1Result,
    ] = await Promise.all([
        payload.find({
            collection: 'hero',
            limit: 1,
            depth: 1,
        }),

        payload.find({
            collection: 'trusted-companies',
            limit: 1,
            depth: 1,
        }),

        payload.find({
            collection: 'features1',
            limit: 1,
            depth: 1,
        }),

        payload.find({
            collection: 'cards1',
            limit: 1,
            depth: 1,
        }),

        payload.find({
            collection: 'features2',
            limit: 1,
            depth: 1,
        }),

        payload.find({
            collection: 'testimonials1',
            limit: 1,
            depth: 1,
        }),

        payload.find({
            collection: 'contact1',
            limit: 1,
            depth: 1,
        }),
    ])

    const hero = heroResult.docs[0]
    const companies = companiesResult.docs[0]
    const solutions = features1Result.docs[0]
    const services = cards1Result.docs[0]
    const results = features2Result.docs[0]
    const testimonials = testimonials1Result.docs[0]
    const contact = contact1Result.docs[0]

    const solutionItems = solutions?.features1?.length ? solutions.features1 : features1Defaults.features1

    const serviceItems = services?.cards?.length ? services.cards : cards1Defaults.cards

    return (
        <>
            {/* HERO */}
            <HeroSection
                titlePrimary={hero?.titlePrimary || 'Software sob medida'}
                title={
                    <>
                        {hero?.title || 'Inovação tecnológica em'}{' '}
                        <AuroraText className="font-bold">
                            {hero?.titleHighlight || 'sistemas digitais de alta performance'}
                        </AuroraText>
                    </>
                }
                desc={
                    hero?.desc ||
                    'Desenvolvemos plataformas, aplicativos e soluções web escaláveis para empresas que precisam automatizar processos, vender mais e evoluir com tecnologia confiável.'
                }
                button1text={hero?.button1text || 'Iniciar meu projeto'}
                button1link={hero?.button1link || 'https://wa.me/5531996398460'}
                button2text={hero?.button2text || 'Ver soluções'}
                button2link={hero?.button2link || '#trabalho'}
            />

            {/* EMPRESAS */}
            <TrustedCompanies
                title={companies?.title || trustedCompaniesDefaults.title}
                companyLogos={
                    companies?.companyLogos?.length
                        ? companies.companyLogos.map((item) => ({
                              id: item.id,
                              logo: item.logo,

                              img: typeof item.img === 'object' && item.img?.url ? item.img.url : null,

                              alt: item.alt,
                              width: item.width,
                          }))
                        : trustedCompaniesDefaults.companyLogos
                }
            />

            {/* SOLUÇÕES */}
            <Features1
                titlePrimary={solutions?.titlePrimary || features1Defaults.titlePrimary}
                title={solutions?.title || features1Defaults.title}
                img={
                    typeof solutions?.image === 'object' && solutions.image?.url
                        ? solutions.image.url
                        : features1Defaults.img
                }
                features1={solutionItems.map((item) => ({
                    ...item,
                    isLast: item.isLast ?? undefined,
                }))}
                buttonText={solutions?.buttonText || features1Defaults.buttonText}
            />

            {/* SERVIÇOS */}
            <Cards1
                titlePrimary={services?.titlePrimary || cards1Defaults.titlePrimary}
                title={services?.title || cards1Defaults.title}
                desc={services?.desc || cards1Defaults.desc}
                cards={serviceItems.map((card) => {
                    const Icon = cardIcons[card.icon] || TbWorld

                    return {
                        ...card,
                        icon: <Icon size={30} color="#3494F9" />,
                    }
                })}
            />

            {/* RESULTADOS */}
            <Features2
                title={results?.title || features2Defaults.title}
                desc={results?.desc || features2Defaults.desc}
                img={typeof results?.img === 'object' && results.img?.url ? results.img.url : features2Defaults.img}
                features1={results?.features1?.length ? results.features1 : features2Defaults.features1}
                metrics={results?.metrics?.length ? results.metrics : features2Defaults.metrics}
                buttonText={results?.buttonText || features2Defaults.buttonText}
                buttonLink={results?.buttonLink || features2Defaults.buttonLink}
            />
            <Testimonials1
                titlePrimary={testimonials?.titlePrimary || testimonials1Defaults.titlePrimary}
                title={testimonials?.title || testimonials1Defaults.title}
                desc={testimonials?.desc || testimonials1Defaults.desc}
                testimonial={
                    testimonials?.testimonial?.length === 3
                        ? testimonials.testimonial.map((item) => ({ ...item, type: item.type ?? undefined }))
                        : [
                              {
                                  name: 'Dr. Marcelo Arantes',
                                  desc: 'A flexibilidade e o rigor técnico transformaram minha disposição diária e composição corporal em 6 meses, conciliando com uma rotina de viagens intensas.',
                                  type: 'Cirurgião & Aluno há 2 anos',
                              },
                              {
                                  name: 'Beatriz Sampaio',
                                  desc: 'Treinar com esse nível de privacidade e precisão biomecânica é um divisor de águas. Cada minuto da sessão é focado em resultado real, sem tempo perdido.',
                                  type: 'Diretora Executiva & Aluna há 18 meses',
                              },
                              {
                                  name: 'Rodrigo Fontes',
                                  desc: 'O diferencial é a inteligência por trás de cada treino. Menos desgaste desnecessário, muito mais força e estética refinada. Vale cada investimento.',
                                  type: 'Sócio-fundador & Aluno há 3 anos',
                              },
                          ]
                }
            />
            {/* CONTATO */}
            <Contact1
                titlePrimary={contact?.titlePrimary || contact1Defaults.titlePrimary}
                title={
                    <>
                        {contact?.title || contact1Defaults.title}{' '}
                        <AuroraText className="font-bold">
                            {contact?.titleHighlight || contact1Defaults.titleHighlight}
                        </AuroraText>
                    </>
                }
                desc={contact?.desc || contact1Defaults.desc}
                buttonText={contact?.buttonText || contact1Defaults.buttonText}
                buttonLink={contact?.buttonLink || contact1Defaults.buttonLink}
            />
        </>
    )
}
