import type { CollectionConfig } from 'payload'

import { features2Defaults } from '@/content/home-defaults'

export const Features2: CollectionConfig = {
    slug: 'features2',
    labels: { singular: 'Resultados', plural: 'Resultados' },
    admin: { useAsTitle: 'title', group: 'Home' },
    fields: [
        {
            name: 'title',
            label: 'Título principal',
            type: 'text',
            required: true,
            defaultValue: features2Defaults.title,
        },
        {
            name: 'desc',
            label: 'Descrição',
            type: 'textarea',
            required: true,
            defaultValue: features2Defaults.desc,
        },
        {
            name: 'img',
            label: 'Imagem',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'features1',
            label: 'Diferenciais',
            type: 'array',
            required: true,
            minRows: 3,
            maxRows: 3,
            defaultValue: features2Defaults.features1,
            fields: [{ name: 'title', label: 'Título', type: 'text', required: true }],
        },
        {
            name: 'metrics',
            label: 'Indicadores',
            type: 'array',
            required: true,
            minRows: 3,
            maxRows: 3,
            defaultValue: features2Defaults.metrics,
            fields: [
                { name: 'value', label: 'Valor', type: 'text', required: true },
                { name: 'title', label: 'Título', type: 'text', required: true },
                { name: 'subtitle', label: 'Subtítulo', type: 'text', required: true },
            ],
        },
        {
            name: 'buttonText',
            label: 'Texto do botão',
            type: 'text',
            required: true,
            defaultValue: features2Defaults.buttonText,
        },
        {
            name: 'buttonLink',
            label: 'Link do botão',
            type: 'text',
            required: true,
            defaultValue: features2Defaults.buttonLink,
        },
    ],
}
