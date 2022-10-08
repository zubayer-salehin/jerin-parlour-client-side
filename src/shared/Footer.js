import React from 'react';
import facebook from "../assets/Icon/Vector.png"
import instagrame from "../assets/Icon/Vector-1.png"
import linkdin from "../assets/Icon/Vector-2.png"
import youtube from "../assets/Icon/Vector-3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white text-center sm:text-left">
            <div className="customContainer navbarPaddingZero pt-8 pb-5">
                <div className="grid sm:grid-cols-12 gap-8 sm:gap-16 py-4">
                    <div className="sm:col-span-4 mb-4 mb-lg-0">
                        <h6 className="uppercase text-xl font-semibold">Contact us</h6>
                        <p className='my-5'>A Jerin Parlour is an establishment dealing with cosmetic treatments for men and women.</p>
                        <ul className="list-unstyled text-center mb-0">
                            <div className='flex items-center justify-center sm:justify-start gap-3'>
                                <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon> <li className="my-1">715 Street, New York 10021 USA</li>
                            </div>
                            <div className='flex items-center justify-center sm:justify-start gap-3'>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <li className="my-1">jerinparlour@gmail.com</li>
                            </div>
                            <div className='flex items-center justify-center sm:justify-start gap-3'>
                                <FontAwesomeIcon icon={faMobileScreen}></FontAwesomeIcon> <li className="my-1">(800) 060-0730, (800) 060-0730</li>
                            </div>
                            <div className='flex items-center justify-center sm:justify-start gap-3'>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> <li className="my-1">Mon-Sat 10:00pm - 7:00pm</li>
                            </div>
                        </ul>
                    </div>
                    <div className="sm:col-span-2 mb-4 mb-lg-0">
                        <h6 className="uppercase text-xl font-semibold mb-5">Shop</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2 ">About Us</li>
                            <li className="mb-2 ">Delivery Info</li>
                            <li className="mb-2 ">Privacy Policy</li>
                            <li className="mb-2 ">Contact Us</li>
                            <li className="mb-2 ">Brands</li>
                            <li className="mb-2 ">Returns</li>
                            <li className="mb-2 ">Site Map</li>
                        </ul>
                    </div>
                    <div className="sm:col-span-2 mb-4 mb-lg-0">
                        <h6 className="uppercase text-xl font-semibold mb-5">Company</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2 ">Store Location</li>
                            <li className="mb-2 ">Order History</li>
                            <li className="mb-2 ">Wish List</li>
                            <li className="mb-2 ">Newsletter</li>
                            <li className="mb-2 ">Specials</li>
                            <li className="mb-2 ">Gift Certificates</li>
                            <li className="mb-2 ">Affiliate</li>
                        </ul>
                    </div>
                    <div className="sm:col-span-4 mb-lg-0">
                        <h6 className="uppercase text-xl font-semibold mb-5">Social Links</h6>
                        <p className='mb-4 '>Connect to Other People All Over the World. Easy and Instant Communication. Real-Time News and Information Discovery. Great Opportunities for Business Owners.</p>
                        <div className='flex justify-center sm:justify-start items-center gap-5'>
                            <div className='w-7'>
                                <img src={facebook} alt="" />
                            </div>
                            <div className='w-7'>
                                <img src={instagrame} alt="" />
                            </div>
                            <div className='w-7'>
                                <img src={linkdin} alt="" />
                            </div>
                            <div className='w-8'>
                                <img src={youtube} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mx-[25px] sm:mx-[106px]' />
            <div className="py-3">
                <div className="customContainer text-center">
                    <p className=" mb-0 py-2">Copyright © {year} Jerin's Parlour. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;