import React from 'react'
import CardMini from '../Components/CardMini'
import trip from '../assets/trip.png'
import trip1 from '../assets/trip1.png'
import trip2 from '../assets/trip2.png'
import trip3 from '../assets/trip3.png'
import SecHeading from '../Components/SecHeading'

const GetInspiration = () => {
    return (
        <div className='container mb-30'>
            <SecHeading title="Get inspiration for your next trip" discription="Interdum et malesuada fames"/>
            <div className='flex items-center justify-between '>
                <CardMini img={trip} title="10 European ski destinations you should visit this winter" dis="April 06, 2022" />
                <CardMini img={trip1} title="Booking travel during Corona: good advice in an uncertain" dis="April 06, 2022" />
                <CardMini img={trip2} title="Where can I go? 5 amazing countries that are open right" dis="April 06, 2022" />
                <CardMini img={trip3} title="The best times & places to see the Northern Lights in Iceland" dis="April 06, 2022" />
            </div>
        </div>
    )
}

export default GetInspiration