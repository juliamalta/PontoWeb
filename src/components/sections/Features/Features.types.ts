export interface FeaturesProps {
    titlePrimary?: string
    title: string | React.ReactNode
    desc?: string
    features1: featuresData[]
    buttonText: string
    buttonLink?: string
    img: string
    metrics?: FeatureMetric[]
}

export interface featuresData {
    title: string
    desc?: string
    isLast?: boolean
}

export type FeatureMetric = {
    value: string
    title: string
    subtitle?: string
}