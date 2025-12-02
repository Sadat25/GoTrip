import React from 'react'
import PopularLocation from '../Components/PopularLocation'
import SecHeading from '../Components/SecHeading'

const Popular = () => {
  return (
    <div className='container' id='popular'>
      <SecHeading title="Popular Destinations" discription="Interdum et malesuada fames ac ante ipsum" />
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