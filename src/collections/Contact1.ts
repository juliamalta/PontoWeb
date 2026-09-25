import type { CollectionConfig } from 'payload'

import { contact1Defaults } from '@/content/home-defaults'

export const Contact1: CollectionConfig = {
    slug: 'contact1',
    labels: { singular: 'Contato', plural: 'Contato' },
    admin: { useAsTitle: 'title', group: 'Home' },
    fields: [
        { name: 'titlePrimary', label: 'Tag', type: 'text', defaultValue: contact1Defaults.titlePrimary },
        {
            name: 'title',
            label: 'Título principal',
            type: 'text',
            required: true,
            defaultValue: contact1Defaults.title,
        },
        {
            name: 'titleHighlight',
            label: 'Texto destacado',
            type: 'text',
            required: true,
            defaultValue: contact1Defaults.titleHighlight,
        },
        {
            name: 'desc',
            label: 'Descrição',
            type: 'textarea',
            required: true,
            defaultValue: contact1Defaults.desc,
        },
        {
            name: 'buttonText',
            label: 'Texto do botão',
            type: 'text',
            required: true,
            defaultValue: contact1Defaults.buttonText,
        },
        {
            name: 'buttonLink',
            label: 'Link do botão',
            type: 'text',
            required: true,
            defaultValue: contact1Defaults.buttonLink,
        },
    ],
}
