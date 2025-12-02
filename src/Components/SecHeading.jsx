import React from 'react'

const SecHeading = ({ title, discription }) => {
    return (
        <div className=' font-jost pt-30'>
            <h2 className='text-3xl font-semibold capitalize text-primary text-center '>{ title }</h2>
            <p className='text-center leading-7.5 text-secondary mb-10 '>{ discription }</p>
        </div>
    )
}

export default SecHeading