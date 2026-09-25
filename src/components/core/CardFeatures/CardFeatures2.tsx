import { CardFeaturesProps } from '@/components/core/CardFeatures/CardFeatures.types'
import { GoVerified } from 'react-icons/go'

function CardFeatures2({ title }: CardFeaturesProps) {
    return (
        <div className="flex items-center pb-3 2xl:pb-5">
            <GoVerified className="h-6 w-6 flex-shrink-0 text-[#3494F9] 2xl:h-8 2xl:w-8" />
            <p className="text-md ml-6 text-white 2xl:text-base">{title}</p>
        </div>
    )
}

export default CardFeatures2
