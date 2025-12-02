import React from 'react'

const CardMini = ({ img, title, dis }) => {
    return (
        <div className='group cursor-pointer max-w-70  '>
            <div className='w-70 h-62.5 overflow-hidden rounded-sm'>
                <img className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 ' src={img} alt="" />
            </div>
            <h2 className='max-w-[250px] text-primary font-medium mt-3.5 mb-1'>{ title }</h2>
            <h2 className='text-secondary leading-6 tracking-[0.3px] '>{ dis }</h2>

        </div>
    )
}

export default CardMini