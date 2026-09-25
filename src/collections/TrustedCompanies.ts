import type { CollectionConfig } from 'payload'

import { trustedCompaniesDefaults } from '@/content/home-defaults'

export const TrustedCompanies: CollectionConfig = {
    slug: 'trusted-companies',
    labels: { singular: 'Empresas que confiam', plural: 'Empresas que confiam' },
    admin: { useAsTitle: 'title', group: 'Home' },
    fields: [
        {
            name: 'title',
            label: 'Título',
            type: 'text',
            required: true,
            defaultValue: trustedCompaniesDefaults.title,
        },
        {
            name: 'companyLogos',
            label: 'Logos das empresas',
            type: 'array',
            required: true,
            minRows: 9,
            maxRows: 9,
            defaultValue: trustedCompaniesDefaults.companyLogos,
            fields: [
                {
                    name: 'logo',
                    label: 'Logo ilustrativo',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'Logoipsum', value: 'wordmark' },
                        { label: 'Digital', value: 'fingerprint' },
                        { label: 'Raposa', value: 'fox' },
                        { label: 'Monograma', value: 'monogram' },
                        { label: 'Ipsum', value: 'ipsum' },
                        { label: 'Globo', value: 'globe' },
                        { label: 'Carimbo', value: 'stamp' },
                        { label: 'Laços', value: 'loops' },
                        { label: 'Hexágono', value: 'hexagon' },
                    ],
                },
                {
                    name: 'img',
                    label: 'Logo da empresa',
                    type: 'upload',
                    relationTo: 'media',
                    required: false,
                    admin: {
                        description: 'Envie uma imagem para substituir o logo ilustrativo.',
                    },
                },
                { name: 'alt', label: 'Descrição do logo', type: 'text', required: true },
                { name: 'width', label: 'Largura do logo', type: 'number', min: 1, required: true },
            ],
        },
    ],
}
