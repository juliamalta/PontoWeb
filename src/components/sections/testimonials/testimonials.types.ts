export interface TestimonialData {
    name: string
    type?: string
    desc: string
    rating?: number
    avatar?: string
}

export type TestimonialProps = {
    desc?: string
    titlePrimary?: string
    title: string
    testimonial: TestimonialData[]
}
