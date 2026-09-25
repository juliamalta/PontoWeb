'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa'
import { AccordionProps } from '@/components/core/Accordion/Accordion.types'

function Accordion({ title, children, accordion }: AccordionProps) {
    const [open, setOpen] = useState(accordion)

    return (
        <div onClick={() => setOpen(!open)} className="mb-8 flex cursor-pointer flex-col gap-8">
            <div className="flex justify-between border-b-2 pb-4">
                <h1 className="text-xl font-bold">{title}</h1>
                {open ? <FaChevronUp color="#7039B7" size={20} /> : <FaChevronDown color="#7039B7" size={20} />}
            </div>
            {open && <div className="text-color-storm">{children}</div>}
        </div>
    )
}

export default Accordion
