import React from 'react'

const SecHeading = ({ title, discription }) => {
    return (
        <div className=' font-jost pt-30'>
            <h3 className='text-center '>{ title }</h3>
            <p className='text-center leading-7.5 text-secondary mb-10 '>{ discription }</p>
        </div>
    )
}

export default SecHeading