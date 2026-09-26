import type { CollectionConfig } from 'payload'

import { testimonials1Defaults } from '@/content/home-defaults'

export const Testimonials1: CollectionConfig = {
    slug: 'testimonials1',
    labels: { singular: 'Depoimento', plural: 'Depoimentos' },
    admin: { useAsTitle: 'title', group: 'Home' },
    fields: [
        {
            name: 'titlePrimary',
            label: 'Tag',
            type: 'text',
            defaultValue: testimonials1Defaults.titlePrimary,
        },
        {
            name: 'title',
            label: 'Título principal',
            type: 'text',
            required: true,
            defaultValue: testimonials1Defaults.title,
        },
        {
            name: 'desc',
            label: 'Descrição',
            type: 'textarea',
            defaultValue: testimonials1Defaults.desc,
        },
        {
            name: 'testimonial',
            label: 'Depoimentos',
            type: 'array',
            required: true,
            minRows: 3,
            maxRows: 3,
            defaultValue: testimonials1Defaults.testimonial,
            fields: [
                { name: 'name', label: 'Nome', type: 'text', required: true },
                { name: 'type', label: 'Identificação', type: 'text' },
                { name: 'desc', label: 'Depoimento', type: 'textarea', required: true },
            ],
        },
    ],
}
