import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

const Card = ({ img, tag, tagBG }) => {
    return (
        <div className='group cursor-pointer max-w-70  '>
            <div className='w-70 h-62.5 overflow-hidden relative rounded-sm'>
                <img className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 ' src={img} alt="" />
                <div className='absolute top-5 right-5 bg-white p-1 rounded-full hover:bg-[#3554D1] hover:text-white transition-all ease-in-out duration-400 '>
                    <IoMdHeartEmpty className='text-xl' />
                </div>
                <h2 className={`absolute top-5 left-0 rounded-tr-sm rounded-br-sm  px-3 py-1.5 text-primary text-[12px] ${tagBG}`}>{tag}</h2>
            </div>
            <p className=' mt-3 mb-1.5 text-sm text-secondary '>Norwegian Getaway</p>
            <h1 class="relative inline-block">
                <span class=" z-10 text-primary text-lg leading-7.5 ">7 Night Cruise to the Western</span>
                <span class="absolute left-0 bottom-1 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full"></span>
            </h1>
            <h1 class="relative inline-block">
                <span class=" z-10 text-primary text-lg leading-7.5 ">Mediterranean</span>
                <span class="absolute left-0 bottom-1 h-0.5 w-0 bg-primary transition-all duration-600 group-hover:w-full"></span>
            </h1>
            <div className='mt-2 mb-2.5 flex items-center justify-between'>
                <div>
                    <p className='text-primary text-sm leading-6 '>18/06/2022</p>
                    <p className='text-secondary text-sm leading-6 '>Sailing Date</p>
                </div>
                <div>
                    <p className='text-primary text-sm leading-6 '>Departs</p>
                    <p className='text-secondary text-sm leading-6 '>Southampton</p>
                </div>
                <div>
                    <p className='text-primary text-sm leading-6 '>Ports (7)</p>
                    <p className='text-secondary text-sm leading-6 '>Sete, Toulon...</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 '>
                    <FaStar className='text-[#E1C03F]' />
                    <p className='text-primary text-[16px] leading-6 '>4.82 <span className='text-secondary text-sm '> 94 reviews</span></p>
                </div>
                <p className='text-secondary text-sm '>From <span className='text-primary text-[16px] leading-6 '> US$72</span> </p>
            </div>
        </div>
    )
}

export default Card