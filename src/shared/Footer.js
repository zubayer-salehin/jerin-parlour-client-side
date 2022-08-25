import React from 'react';
import location from "../assets/Icon/map-pin-2-fill.png"
import facebook from "../assets/Icon/Vector.png"
import instagrame from "../assets/Icon/Vector-1.png"
import linkdin from "../assets/Icon/Vector-2.png"
import youtube from "../assets/Icon/Vector-3.png"

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white text-center sm:text-left px-10 sm:px-20">
            <div className='2xl:max-w-7xl mx-auto'>
                <div className="container pt-8 pb-5">
                    <div className="grid sm:grid-cols-12 gap-10 py-4">
                        <div className="sm:col-start-1 sm:col-end-5 mb-4 mb-lg-0 mt-2">
                            <div className='flex'>
                                <div className='w-8 mr-3 mt-1'>
                                    <img className='w-full' src={location} alt="" />
                                </div>
                                <p className="font-italic ">H#000 (0th Floor), Road #00,
                                    New DOHS, Mohakhali, Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                        <div className="sm:col-start-5 sm:col-end-7 mb-4 mb-lg-0">
                            <h6 className="uppercase text-xl font-semibold mb-4">Company</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2 text-sm">About</li>
                                <li className="mb-2 text-sm">Project</li>
                                <li className="mb-2 text-sm">Our Team</li>
                                <li className="mb-2 text-sm">Terms Conditions</li>
                                <li className="mb-2 text-sm">Submit Listing</li>
                            </ul>
                        </div>
                        <div className="sm:col-start-7 sm:col-end-9 mb-4 mb-lg-0">
                            <h6 className="uppercase text-xl font-semibold mb-4">Quick Links</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2 text-sm">Quick Links</li>
                                <li className="mb-2 text-sm">Rentals</li>
                                <li className="mb-2 text-sm">Sales</li>
                                <li className="mb-2 text-sm">Contact</li>
                                <li className="mb-2 text-sm">Our blog</li>
                            </ul>
                        </div>
                        <div className="sm:col-start-9 sm:col-end-13 mb-lg-0">
                            <h6 className="uppercase text-xl font-semibold mb-4">About Us</h6>
                            <p className='mb-4 text-sm'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Purus commodo ipsum
                                duis laoreet maecenas. Feugiat </p>
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

                <div className="py-3">
                    <div className="container text-center">
                        <p className=" mb-0 py-2">Copyright © {year} Jerin's Parlour. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;