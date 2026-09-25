import type { CollectionConfig } from 'payload'

import { features1Defaults } from '@/content/home-defaults'

export const Features1: CollectionConfig = {
    slug: 'features1',
    labels: { singular: 'Soluções digitais', plural: 'Soluções digitais' },
    admin: { useAsTitle: 'title', group: 'Home' },
    fields: [
        {
            name: 'titlePrimary',
            label: 'Tag',
            type: 'text',
            required: true,
            defaultValue: features1Defaults.titlePrimary,
        },
        {
            name: 'title',
            label: 'Título principal',
            type: 'text',
            required: true,
            defaultValue: features1Defaults.title,
        },
        {
            name: 'image',
            label: 'Imagem',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'features1',
            label: 'Soluções',
            type: 'array',
            required: true,
            minRows: 3,
            maxRows: 3,
            defaultValue: features1Defaults.features1,
            fields: [
                { name: 'title', label: 'Título', type: 'text', required: true },
                { name: 'desc', label: 'Descrição', type: 'textarea', required: true },
                { name: 'isLast', label: 'Último item', type: 'checkbox', defaultValue: false },
            ],
        },
        {
            name: 'buttonText',
            label: 'Texto do botão',
            type: 'text',
            required: true,
            defaultValue: features1Defaults.buttonText,
        },
    ],
}
