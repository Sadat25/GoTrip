import React from 'react'
import BTN from '../Components/BTN'
import { MdArrowOutward } from "react-icons/md";
import WhyChoose from '../Components/WhyChoose';
import bestPriceImg from '../assets/guarantee.png'
import bestPriceImg1 from '../assets/Group.png'
import bestPriceImg2 from '../assets/earth.png'
import bestPriceImg3 from '../assets/Group1.png'

const WhyChooseUs = () => {
    return (
        <div className='container mt-30 flex items-center '>
            <div className='w-[40%]'>
                <h2 className='text-primary text-3xl font-semibold capitalize '>Why Choose Us</h2>
                <h2 className='text-secondary leading-7.5 '>These popular destinations have a lot to offer</h2>
                <p className='pr-20 py-10 text-primary leading-7.5'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <BTN className="flex items-center gap-2 ">
                    Learn More
                    <MdArrowOutward className='text-xl' />
                </BTN>
            </div>
            <div className='w-[60%] flex flex-wrap gap-10'>
                <WhyChoose img={bestPriceImg} title="Best Price Guarantee" />
                <WhyChoose img={bestPriceImg1} title="Easy & Quick Booking" />
                <WhyChoose img={bestPriceImg2} title="700+ Destinations" />
                <WhyChoose img={bestPriceImg3} title="Customer Care 24/7" />
            </div>
        </div>
    )
}

export default WhyChooseUs