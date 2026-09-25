import { Reveal } from '@/components/animations/Reveal'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { AboutProps } from '@/components/sections/AboutUs/AboutUs.types'

function AboutUs1({ title, text1, text2, titlePrimary }: AboutProps) {
    return <section className="bg-color-codgray relative overflow-hidden pt-16 sm:pt-24" id="sobre"></section>
}

export default AboutUs1
