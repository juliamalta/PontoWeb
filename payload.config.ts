import { Cards1 } from '@/collections/Cards1'
import { Contact1 } from '@/collections/Contact1'
import { Features1 } from '@/collections/Features1'
import { Features2 } from '@/collections/Features2'
import { Hero } from '@/collections/Hero'
import { Media } from '@/collections/Media'
import { TrustedCompanies } from '@/collections/TrustedCompanies'
import { Users } from '@/collections/Users'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

export default buildConfig({
    secret: process.env.PAYLOAD_SECRET || '',

    db: mongooseAdapter({
        url: process.env.DATABASE_URL || '',
    }),

    editor: lexicalEditor(),

    collections: [Users, Media, Hero, TrustedCompanies, Features1, Cards1, Features2, Contact1],

    admin: {
        user: Users.slug,
        theme: 'dark',
        meta: {
            titleSuffix: ' | PontoWeb',
        },
        components: {
            graphics: {
                Logo: '@/components/admin/Branding#AdminLogo',
                Icon: '@/components/admin/Branding#AdminIcon',
            },
        },
    },

    sharp,
})
