import type { CollectionConfig } from 'payload'

import { cards1Defaults } from '@/content/home-defaults'

export const Cards1: CollectionConfig = {
    slug: 'cards1',
    labels: { singular: 'Serviços especializados', plural: 'Serviços especializados' },
    admin: { useAsTitle: 'title', group: 'Home' },
    fields: [
        {
            name: 'titlePrimary',
            label: 'Tag',
            type: 'text',
            defaultValue: cards1Defaults.titlePrimary,
        },
        {
            name: 'title',
            label: 'Título principal',
            type: 'text',
            required: true,
            defaultValue: cards1Defaults.title,
        },
        {
            name: 'desc',
            label: 'Descrição',
            type: 'textarea',
            required: true,
            defaultValue: cards1Defaults.desc,
        },
        {
            name: 'cards',
            label: 'Serviços',
            type: 'array',
            required: true,
            minRows: 3,
            maxRows: 3,
            defaultValue: cards1Defaults.cards,
            fields: [
                {
                    name: 'icon',
                    label: 'Ícone',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'Globo', value: 'TbWorld' },
                        { label: 'Celular', value: 'CiMobile1' },
                        { label: 'Conta-gotas', value: 'MdOutlineColorize' },
                    ],
                },
                { name: 'title', label: 'Título', type: 'text', required: true },
                { name: 'text', label: 'Texto', type: 'textarea', required: true },
                { name: 'iconBgColor', label: 'Cor de fundo do ícone', type: 'text', required: true },
            ],
        },
    ],
}
