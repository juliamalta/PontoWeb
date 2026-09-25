import { Reveal } from '@/components/animations/Reveal'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { AboutProps } from '@/components/sections/AboutUs/AboutUs.types'

function AboutUs1({ title, text1, text2, titlePrimary }: AboutProps) {
    return (
        <section className="relative overflow-hidden bg-color-codgray pt-16 sm:pt-24" id="sobre">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row 2xl:gap-16">
                <div className="flex flex-col gap-10 lg:w-2/3">
                    <div className="flex flex-col items-center gap-6">
                        <Reveal distance={16}>
                            <p className="text-base font-semibold text-color-frenchgray">{titlePrimary}</p>
                        </Reveal>
                        <div className="w-full">
                            <TypingAnimation
                                as="h2"
                                startOnView
                                delay={120}
                                duration={30}
                                className="text-center text-4xl font-semibold text-white">
                                {title}
                            </TypingAnimation>
                        </div>
                    </div>
                    <Reveal delay={0.15} className="flex flex-col items-center justify-center gap-8">
                        <p className="text-center text-base font-normal text-color-frenchgray 2xl:w-2/3">{text1}</p>
                        <p className="text-base font-normal text-color-frenchgray">{text2}</p>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default AboutUs1
