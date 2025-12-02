import React from 'react'
import Hero from '../Section/Hero'
import Popular from '../Section/PopularDestinations'
import Featured from '../Section/FeaturedCruiseDeals'
import BookingPlatform from '../Section/BookingPlatform'
import WhyChooseUs from '../Section/WhyChooseUs'
import RecommendedCruise from '../Section/RecommendedCruise'
import OurFamily from '../Section/OurFamily'
import GetInspiration from '../Section/GetInspiration'

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Featured />
      <BookingPlatform />
      <WhyChooseUs />
      <RecommendedCruise />
      <OurFamily />
      <GetInspiration/>
    </>
  )
}

export default Home