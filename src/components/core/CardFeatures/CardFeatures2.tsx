import { GoVerified } from 'react-icons/go'

import { CardFeaturesProps } from '@/components/core/CardFeatures/CardFeatures.types'

function CardFeatures2({ title }: CardFeaturesProps) {
    return (
        <div className="flex items-center pb-3 2xl:pb-5">
            <GoVerified className="size-6 shrink-0 text-[#3494F9] 2xl:size-8" />
            <p className="text-md ml-6 text-white 2xl:text-base">{title}</p>
        </div>
    )
}

export default CardFeatures2
