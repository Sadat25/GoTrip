import React from 'react'
import bookingImage from '../assets/booking.png'
import BTN from '../Components/BTN'
import { MdArrowOutward } from "react-icons/md";

const BookingPlatform = () => {
    return (
        <div className='flex w-full '>
            <div className='w-[50%] relative '>
                <div className='flex gap-8 z-20 absolute -right-20 top-[130px] '>
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
            </div>
            <div className='w-[61%] bg-[#F5F5F5] p-[150px] '>
                <div className='max-w-[520px]'>
                    <h3>GoTrip is a World Leading Cruise
                        Booking Platform</h3>
                    <h4 className='py-10 '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
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