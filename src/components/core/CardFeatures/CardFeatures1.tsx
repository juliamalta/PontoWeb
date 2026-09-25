import { LuAlignHorizontalJustifyStart } from 'react-icons/lu'

import { CardFeaturesProps } from '@/components/core/CardFeatures/CardFeatures.types'

function CardFeatures1({ title, desc, icon }: CardFeaturesProps) {
    return (
        <div>
            <div className="flex gap-5 pb-6">
                <div
                    className="flex size-14 items-center justify-center rounded-2xl px-4"
                    style={{ backgroundColor: 'rgba(7, 90, 210, 0.15)' }}>
                    <LuAlignHorizontalJustifyStart size={30} color="#3494F9" />
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-2xl font-bold text-white">{title}</p>

                    <p className="text-left text-color-frenchgray">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CardFeatures1
