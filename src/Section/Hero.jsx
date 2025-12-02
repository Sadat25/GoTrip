import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDash } from "react-icons/go";
import BTN from "../Components/BTN";
import { MdSearch } from "react-icons/md";

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
                right: "30px",
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <GoDash className="opacity-50 hover:opacity-80 " size={60} color="#fff" />
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
                left: "30px",
                zIndex: 1,
            }}
            onClick={onClick}
        >
            <GoDash className="opacity-50 hover:opacity-80 " size={60} color="#fff" />
        </div>
    );
}


const Hero = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const images = [
        "/bg.png",
        "/bg.png",
        "/bg.png",
        "/bg.png",
        "/bg.png",
        "/bg.png",
    ];

    return (
        <div className="font-jost ">
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index}>
                            <div
                                className=" h-screen w-full bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <p className="leading-[30px] mb-2.5 ">TOUR EXPERIENCE</p>
                                <h2 className="text-[80px] font-semibold text-center ">Find The Best Cruise
                                    <br />
                                    For You</h2>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="w-full flex items-center mt-[-115px] absolute">
                <div className="w-[60%] flex justify-between py-6.5 rounded-tr-sm bg-white shadow-lg ">
                    <div></div>
                    <div className="flex items-center ">
                        <div className="mr-[95px] ">
                            <h5 className="text-primary text-[15px] tracking-[0.3px] ">Where to</h5>
                            <p className="text-[15px] leading-[26px] tracking-[0.3px] text-secondary ">All Destination</p>
                        </div>
                        <div className="px-[30px] border-x border-[#DADFE6] ">
                            <h5 className="text-primary text-[15px] tracking-[0.3px] ">All Cruise Line</h5>
                            <p className="text-[15px] leading-[26px] tracking-[0.3px] text-secondary ">Holland America Line</p>
                        </div>
                        <div className="px-[30px] ">
                            <h5 className="text-primary text-[15px] tracking-[0.3px] ">Departure Month</h5>
                            <p className="text-[15px] leading-[26px] tracking-[0.3px] text-secondary ">April 2022</p>
                        </div>
                        <BTN className="flex items-center gap-2.5 mx-6.5 ">
                            <MdSearch className="text-xl " />
                            Search
                        </BTN>
                    </div>
                </div>
                <div className="w-[40%] text-white flex justify-between px-15 ">
                    <div></div>
                    <a href='#popular' className=" group flex gap-2.5 items-center text-end cursor-pointer ">
                        <div>
                            <h2 className="leading-[30px] font-semibold ">Scroll Down</h2>
                            <p className="text-[15px] leading-[26px] tracking-[0.3px] ">to discover more</p>
                        </div>
                        <div className="h-10.5 w-7 rounded-full border-2 border-white relative ">
                            <div className="h-2 w-2 rounded-full border-2 border-white absolute top-1.5 left-[9px] group-hover:top-[25px] group-hover:bg-white transition-all ease-in-out duration-400"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;