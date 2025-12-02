import React from 'react'

const WhyChoose = ({ img, title }) => {
    return (
        <div>
            <img src={img} alt="" />
            <h2 className='py-2.5 text-primary text-lg leading-7.5'>{title}</h2>
            <p className='text-secondary leading-7 tracking-[0.3px] max-w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}

export default WhyChoose