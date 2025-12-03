import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";

const PopularLocation = ({ title }) => {
    return (
        <div className='py-[17px] px-4 rounded-md bg-[#F5F5F5] hover:bg-[#3554D1] group text-black flex items-center gap-2 cursor-default select-none '>
            <MdOutlineLocationOn className='text-xl group-hover:text-white'/>
            <div>
                <h4 className=' group-hover:text-white '>{title}</h4>
                <h5 className='text-secondary group-hover:text-white '>4,090 properties</h5>
            </div>
        </div>
    )
}

export default PopularLocation