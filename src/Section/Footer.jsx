import React from 'react'
import img from '../assets/newsletter.png'
import apple from '../assets/apple.png'
import play from '../assets/play.png'
import BTN from '../Components/BTN'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#3554D1] '>
            <div className="container ">
                <div className='flex items-center justify-between py-21.5'>
                    <div className='flex gap-7 items-center '>
                        <img src={img} alt="" />
                        <div>
                            <h3 className='text-white'>Your Travel Journey Starts Here</h3>
                            <h4 className='text-white'>Sign up and we'll send the best deals to you</h4>
                        </div>
                    </div>
                    <div className='flex gap-2.5 items-center'>
                        <input className='py-4 px-5 w-[360px] bg-white rounded-sm outline-none focus:outline-none active:outline-none ' type="text" placeholder='Your Email' />
                        <div className='hover:border hover:border-[#F8D448] rounded-sm '>
                            <BTN>Subscribe</BTN>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-15 text-white">

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>

                        <p className="text-sm text-white">Toll Free Customer Care</p>
                        <p className="text-xl font-semibold mt-1 text-white cursor-pointer">+(1) 123 456 7890</p>

                        <p className="text-sm mt-6 text-white">Need live support?</p>
                        <p className="text-base font-medium mt-1 text-white cursor-pointer">hi@gotrip.com</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="cursor-pointer">About Us</li>
                            <li className="cursor-pointer">Careers</li>
                            <li className="cursor-pointer">Blog</li>
                            <li className="cursor-pointer">Press</li>
                            <li className="cursor-pointer">Gift Cards</li>
                            <li className="cursor-pointer">Magazine</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="cursor-pointer">Contact</li>
                            <li className="cursor-pointer">Legal Notice</li>
                            <li className="cursor-pointer">Privacy Policy</li>
                            <li className="cursor-pointer">Terms and Conditions</li>
                            <li className="cursor-pointer">Sitemap</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Other Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="cursor-pointer">Car hire</li>
                            <li className="cursor-pointer">Activity Finder</li>
                            <li className="cursor-pointer">Tour List</li>
                            <li className="cursor-pointer">Flight finder</li>
                            <li className="cursor-pointer">Cruise Ticket</li>
                            <li className="cursor-pointer">Holiday Rental</li>
                            <li className="cursor-pointer">Travel Agents</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Mobile</h3>

                        <div className="space-y-4">

                            <button className="flex items-center gap-3 border border-white/15 cursor-pointer rounded-xl px-4 py-3 w-full text-left">
                                <img src={apple} className="w-6 h-6" />
                                <div>
                                    <p className="text-xs text-white">Download on the</p>
                                    <p className="text-sm font-medium text-white">Apple Store</p>
                                </div>
                            </button>

                            <button className="flex items-center gap-3 border border-white/15 cursor-pointer rounded-xl px-4 py-3 w-full text-left">
                                <img src={play} className="w-6 h-6" />
                                <div>
                                    <p className="text-xs text-white">Get it on</p>
                                    <p className="text-sm font-medium text-white">Google Play</p>
                                </div>
                            </button>

                        </div>
                    </div>
                </div>


                <div className="border-t border-white/30 mt-12 pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white">

                    {/* Left Side */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">

                        <span>© 2022 GoTrip LLC All rights reserved.</span>

                        <span className="">•</span>
                        <span className="cursor-pointer hover:opacity-80">Privacy</span>

                        <span className="">•</span>
                        <span className="cursor-pointer hover:opacity-80">Terms</span>

                        <span className="">•</span>
                        <span className="cursor-pointer hover:opacity-80">Site Map</span>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-5 text-sm">

                        <div className="flex items-center gap-5 text-sm">

                            {/* Language */}
                            <div className="flex items-center gap-2 cursor-pointer">
                                <i className="fi fi-br-globe text-lg"></i>

                                <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full ">
                                    English (US)
                                </span>
                            </div>

                            {/* Currency */}
                            <div className="flex items-center gap-1 cursor-pointer">

                                <span>$</span>

                                <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-white after:w-0  after:transition-all after:duration-300 hover:after:w-full ">
                                    USD
                                </span>
                            </div>
                        </div>


                        {/* Social Icons */}
                        <div className="flex items-center gap-4 text-lg">
                            <FaFacebookF className='cursor-pointer' />
                            <FaTwitter className='cursor-pointer' />
                            <AiFillInstagram className='cursor-pointer' />
                            <FaLinkedinIn className='cursor-pointer' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer