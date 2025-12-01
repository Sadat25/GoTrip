import React from 'react'
import PopularLocation from '../Components/PopularLocation'

const Popular = () => {
  return (
    <div className='container font-jost mt-30'>
      <h2 className='text-3xl font-semibold capitalize text-primary text-center '>Popular Destinations</h2>
      <p className='text-center leading-7.5 text-secondary mb-10 '>Interdum et malesuada fames ac ante ipsum</p>
      <div className='flex justify-between '>
        <PopularLocation title="New York" />
        <PopularLocation title="London" />
        <PopularLocation title="Los Angeles" />
        <PopularLocation title="Paris" />
        <PopularLocation title="Istanbul" />
        <PopularLocation title="Rome" />
        <PopularLocation title="Madrid" />
      </div>
    </div>
  )
}

export default Popular