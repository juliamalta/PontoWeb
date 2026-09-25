import { CiMobile1 } from 'react-icons/ci'
import { MdOutlineColorize } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import AboutUs1 from '@/components/sections/AboutUs/AboutUs1'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustedCompanies } from '@/components/sections/trusted-companies'
import Cards1 from '@/components/sections/Cards/Cards1'
import Features1 from '@/components/sections/Features/Features1'
import { AuroraText } from '@/components/magicui/aurora-text'
import Features2 from '@/components/sections/Features/Features2'
import { Contact } from 'lucide-react'
import Contact1 from '@/components/sections/Contact/Contact1'

export default function Home() {
    return (
        <>
            <HeroSection
                titlePrimary="Software sob medida"
                title={
                    <>
                        Inovação tecnológica em
                        <AuroraText className="font-bold"> sistemas digitais de alta performance</AuroraText>
                    </>
                }
                desc="Desenvolvemos plataformas, aplicativos e soluções web escaláveis para empresas que precisam automatizar processos, vender mais e evoluir com tecnologia confiável."
                button1text="Iniciar meu projeto"
                button2text="Ver soluções"
            />
            <TrustedCompanies />
            <Features1
                titlePrimary="SOLUÇÕES DIGITAIS"
                title={<>Inovação em Movimento</>}
                img="/images/img1.png"
                features1={[
                    {
                        title: 'Backend Sólido',
                        desc: 'Estruturamos sistemas com base sólida, garantindo estabilidade, segurança e facilidade de evolução.',
                    },
                    {
                        title: 'Performance e escalabilidade',
                        desc: 'Criamos aplicações rápidas, responsivas e preparadas para lidar com aumento de usuários, dados e funcionalidades.',
                    },
                    {
                        title: 'Performance e escalabilidade',
                        desc: 'Criamos aplicações rápidas, responsivas e preparadas para lidar com aumento de usuários, dados e funcionalidades.',
                        isLast: true,
                    },
                ]}
                buttonText="Quero começar meu projeto"
            />

            <AboutUs1
                titlePrimary="Sobre a PontoWeb"
                title="Serviços Especializados"
                text1="Desenvolvemos produtos digitais completos, desde sistemas internosaté plataformas, aplicativos e integrações personalizadas."
            />
            <Cards1
                title="Serviços Especializados"
                desc="Desenvolvemos produtos digitais completos, desde sistemas internosaté plataformas, aplicativos e integrações personalizadas."
                cards={[
                    {
                        icon: <TbWorld size={30} color="#3494F9" />,
                        title: 'Desenvolvimentode Sistemas',
                        text: 'Criamos sistemas web personalizados para automatizar processos, organizar informações e aumentar a eficiência da sua operação.',
                        iconBgColor: '#F3E8FF',
                    },
                    {
                        icon: <CiMobile1 size={30} color="#3494F9" />,
                        title: 'Infraestrutura & DevOps',
                        text: 'Preparamos sua aplicação para rodar com segurança, estabilidade e performance, usando boas práticas de deploy, integração e monitoramento.',
                        iconBgColor: '#C2F6FF',
                    },
                    {
                        icon: <MdOutlineColorize size={30} color="#3494F9" />,
                        title: 'Dados & IA',
                        text: 'Transformamos dados em decisões mais estratégicas por meio de dashboards, automações, integrações e recursos inteligentes.',
                        iconBgColor: '#FFEDD5',
                    },
                ]}
            />
            <Features2
                title="Soluções digitais que geram resultados"
                desc="Criamos experiências digitais modernas, rápidas e preparadas para crescer."
                img="/images/features.png"
                features1={[
                    {
                        title: 'Desenvolvimento personalizado',
                    },
                    {
                        title: 'Alta performance',
                    },
                    {
                        title: 'Suporte especializado',
                    },
                ]}
                metrics={[
                    {
                        value: '+50',
                        title: 'Projetos',
                        subtitle: 'digitais entregues',
                    },
                    {
                        value: '99%',
                        title: 'Foco em',
                        subtitle: 'performance',
                    },
                    {
                        value: '24/7',
                        title: 'Suporte',
                        subtitle: 'completo',
                    },
                ]}
                buttonText="Solicitar Orcamento"
            />
            <Contact1
                title={
                    <>
                        Pronto para o <AuroraText className="font-bold"> Próximo Nível?</AuroraText>
                    </>
                }
                desc="Conte com uma equipe especializada para planejar, desenvolver e lançar sistemas, plataformas e aplicativos com qualidade, segurança e foco em crescimento."
                buttonText="Agendar consultoria técnica"
            />
        </>
    )
}
