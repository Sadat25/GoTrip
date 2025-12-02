import React from 'react'
import our from '../assets/our.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                background: "transparent",
                alignItems: "center",
                justifyContent: "center",
                width: "70px",
                right: "620px",
                top: "545px",
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <MdArrowForward size={30} color="#fff" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                background: "transparent",
                alignItems: "center",
                justifyContent: "center",
                width: "70px",
                left: "600px",
                top: "545px",
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <MdArrowBack size={30} color="#fff" />
        </div>
    );
}


const OurFamily = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <div>
                <ul className='absolute -top-25 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='w-2 h-2 rounded-full bg-gray-500'></div>
        )
    };

    return (
        <div>

            <div className="slider-container">
                <Slider {...settings}>
                    <div className="bg-[url('/bg1.png')] bg-cover bg-center text-white text-center  w-full py-30">
                        <img className='m-auto' src={our} alt="" />
                        <h2 className='text-[22px] font-semibold leading-11 py-10.5 max-w-[796px] m-auto '>"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</h2>
                        <p>Ali Tufan</p>
                        <p className='text-sm mt-1.5 pb-20 '>Product Manager, Apple Inc</p>
                    </div>
                    <div className="bg-[url('/bg1.png')] bg-cover bg-center text-white text-center  w-full py-30">
                        <img className='m-auto' src={our} alt="" />
                        <h2 className='text-[22px] font-semibold leading-11 py-10.5 max-w-[796px] m-auto '>"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</h2>
                        <p>Ali Tufan</p>
                        <p className='text-sm mt-1.5 pb-20 '>Product Manager, Apple Inc</p>
                    </div>
                    <div className="bg-[url('/bg1.png')] bg-cover bg-center text-white text-center  w-full py-30">
                        <img className='m-auto' src={our} alt="" />
                        <h2 className='text-[22px] font-semibold leading-11 py-10.5 max-w-[796px] m-auto '>"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</h2>
                        <p>Ali Tufan</p>
                        <p className='text-sm mt-1.5 pb-20 '>Product Manager, Apple Inc</p>
                    </div>
                    <div className="bg-[url('/bg1.png')] bg-cover bg-center text-white text-center  w-full py-30">
                        <img className='m-auto' src={our} alt="" />
                        <h2 className='text-[22px] font-semibold leading-11 py-10.5 max-w-[796px] m-auto '>"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</h2>
                        <p>Ali Tufan</p>
                        <p className='text-sm mt-1.5 pb-20 '>Product Manager, Apple Inc</p>
                    </div>
                    <div className="bg-[url('/bg1.png')] bg-cover bg-center text-white text-center  w-full py-30">
                        <img className='m-auto' src={our} alt="" />
                        <h2 className='text-[22px] font-semibold leading-11 py-10.5 max-w-[796px] m-auto '>"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</h2>
                        <p>Ali Tufan</p>
                        <p className='text-sm mt-1.5 pb-20 '>Product Manager, Apple Inc</p>
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default OurFamily