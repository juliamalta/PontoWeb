export interface FooterItem {
    title: string
    items: {
        text: string
        link?: string
    }[]
}

export interface FooterProps {
    info: FooterItem[]
    desc: string
    rights: string
}
