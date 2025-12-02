import React from 'react'
import SecHeading from '../Components/SecHeading'
import Card from '../Components/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import img from '../assets/boat.png'
import img1 from '../assets/boat1.png'
import img2 from '../assets/boat2.png'

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
                right: "-10px",
                top: "130px",
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <div className='bg-white rounded-full p-2.5 shadow-xl' >
                <MdOutlineArrowForwardIos size={20} color="black" />
            </div>
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
                left: "-35px",
                top: "130px",
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <div className='bg-white rounded-full p-2.5 shadow-xl ' >
                <MdOutlineArrowBackIos size={20} color="black" />
            </div>
        </div>
    );
}

const RecommendedCruise = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const cards = [
        {
            img: img,
            tag: "TOP RATED",
            tagBG: "bg-[#F8D448]"
        },
        {
            img: img1,
            tag: "BEST SELLER",
            tagBG: "bg-[#3554D1] text-white"
        },
        {
            img: img2,
            tagBG: "hidden"
        },
        {
            img: img,
            tag: "CRUISE ONLY",
            tagBG: "bg-[#051036] text-white"
        },
        {
            img: img1,
            tag: "BEST SELLER",
            tagBG: "bg-[#3554D1] text-white"
        },
        {
            img: img2,
            tagBG: "hidden"
        }
    ];


    return (
        <div className="container mb-30">
            <SecHeading title="Recommended Cruise" discription="Interdum et malesuada fames ac ante ipsum" />

            <div className="slider-container">
                <Slider {...settings}>
                    {cards.map((item, index) => (
                        <Card
                            key={index}
                            img={item.img}
                            tag={item.tag}
                            tagBG={item.tagBG}
                        />
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default RecommendedCruise