import type { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
    slug: 'hero',

    labels: {
        singular: 'Hero',
        plural: 'Hero',
    },

    admin: {
        useAsTitle: 'titlePrimary',
        group: 'Home',
    },

    fields: [
        {
            name: 'titlePrimary',
            label: 'Tag',
            type: 'text',
            required: true,
            defaultValue: 'Software sob medida',
        },
        {
            name: 'title',
            label: 'Título principal',
            type: 'text',
            required: true,
            defaultValue: 'Inovação tecnológica em',
        },
        {
            name: 'titleHighlight',
            label: 'Texto destacado',
            type: 'text',
            required: true,
            defaultValue: 'sistemas digitais de alta performance',
        },
        {
            name: 'desc',
            label: 'Descrição',
            type: 'textarea',
            required: true,
            defaultValue:
                'Desenvolvemos plataformas, aplicativos e soluções web escaláveis para empresas que precisam automatizar processos, vender mais e evoluir com tecnologia confiável.',
        },
        {
            name: 'button1text',
            label: 'Texto do botão 1',
            type: 'text',
            required: true,
            defaultValue: 'Iniciar meu projeto',
        },
        {
            name: 'button1link',
            label: 'Link do botão 1',
            type: 'text',
            required: true,
            defaultValue: 'https://wa.me/5531996398460',
        },
        {
            name: 'button2text',
            label: 'Texto do botão 2',
            type: 'text',
            required: true,
            defaultValue: 'Ver soluções',
        },
        {
            name: 'button2link',
            label: 'Link do botão 2',
            type: 'text',
            required: true,
            defaultValue: '#trabalho',
        },
    ],
}
