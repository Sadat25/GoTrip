import React from 'react'
import bookingImage from '../assets/booking.png'
import BTN from '../Components/BTN'
import { MdArrowOutward } from "react-icons/md";

const BookingPlatform = () => {
    return (
        <div className='flex items-center w-full '>
            <div className='w-[50%] -mr-40 flex gap-8 z-20 '>
                <img className='w-[320px] ' src={bookingImage} alt="" />
                <div className="w-[320px] overflow-hidden">
                    <iframe
                        width="325"
                        height="100%"
                        src="https://www.youtube.com/embed/_oeS1yWNbGg?autoplay=1&mute=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
            <div className='w-[61%] bg-[#F5F5F5] pt-[195px] pb-[205px] pl-[220px] '>
                <div className='max-w-[520px]'>
                    <h2 className='text-primary text-3xl font-semibold capitalize '>GoTrip is a World Leading Cruise
                        Booking Platform</h2>
                    <h2 className='py-10 text-primary leading-7.5 '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h2>
                    <BTN className="flex items-center gap-2 ">
                        Learn More
                        <MdArrowOutward className='text-xl' />
                    </BTN>
                </div>
            </div>
        </div>
    )
}

export default BookingPlatform