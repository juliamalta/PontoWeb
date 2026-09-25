import { FloatingVisual } from '@/components/animations/FloatingVisual'
import { Reveal } from '@/components/animations/Reveal'
import CardFeatures1 from '@/components/core/CardFeatures/CardFeatures1'
import { FeaturesProps } from '@/components/sections/Features/Features.types'
function Features1({ title, features1, img, titlePrimary }: FeaturesProps) {
    return (
        <section id="features">
            <div className="bg-color-woodsmoke">
                <div className="container py-24">
                    <div className="flex flex-col gap-8">
                        <Reveal className="flex flex-col gap-2">
                            <p className="w-fit rounded-2xl text-base font-bold text-[#075AD2]">{titlePrimary}</p>
                            <p className="w-full items-center justify-center text-4xl font-semibold text-white lg:text-left 2xl:text-4xl">
                                {title}
                            </p>
                        </Reveal>
                        <div className="flex flex-col justify-between gap-16 lg:items-center xl:flex-row">
                            <Reveal delay={0.1} className="group mb-8 hidden flex-1 xl:block">
                                <FloatingVisual className="relative w-full">
                                    {/* brilho atrás */}
                                    <div className="absolute -inset-3 rounded-3xl bg-blue-500/20 blur-2xl transition-all duration-500 group-hover:bg-blue-500/30" />

                                    <img
                                        className="relative w-full rounded-2xl object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none"
                                        src={img}
                                        alt="Dashboard de uma plataforma digital"
                                    />
                                </FloatingVisual>
                            </Reveal>
                            <div className="flex flex-1 items-center justify-center">
                                <div className="flex flex-col justify-center gap-8 px-2">
                                    {features1.map((features, index) => (
                                        <Reveal key={index} delay={0.15 + index * 0.12}>
                                            <CardFeatures1 title={features.title} desc={features.desc!} />
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features1
