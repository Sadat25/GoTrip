import React from 'react'

const BTN = ({ children, className }) => {
    return (
        <button className={`${className} px-9.5 py-5 text-black bg-[#F8D448] rounded-sm cursor-pointer border-none hover:bg-[#3554D1] hover:text-white transition-all duration-400`}>
            {children}
        </button>
    );
}

export default BTN