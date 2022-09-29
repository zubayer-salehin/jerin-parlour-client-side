import React from 'react';
import { faFeatherPointed, faGears, faPeopleGroup, faPercentage, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import picture from "../../assets/About-Us/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png"
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import "./Testimonials.css";


const ChooseUs = () => {
    return (
        <div id='about-us' className="bg-[url('/src/assets/Background-Image/bg7.jpg')] bg-cover">
            <div className='customContainer'>
                <div className="hero py-28">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='sm:w-6/12 sm:ml-12'>
                            <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left text-secondary leading-tight">Why Our Clients & Customer <span className='text-primary'>Choose Us</span></h2>
                            <p className="py-8 sm:py-5 text-sm text-slate-500 sm:pr-16">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ullam ipsum eos nostrum inventore perferendis nisi mollitia voluptas? Necessitatibus blanditiis voluptatibus unde nisi inventore odio!</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 pt-5 sm:pt-7'>
                                <div className='flex items-center gap-4 sm:gap-5'>
                                    <FontAwesomeIcon className='w-12 h-12 text-primary' icon={faFeatherPointed} />
                                    <div>
                                        <h3 className='text-lg font-bold text-secondary'>100% NATURAL</h3>
                                        <h5 style={{ letterSpacing: "2px" }} className='text-lg'>PRODUCTS</h5>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 sm:gap-5'>
                                    <FontAwesomeIcon className='w-12 h-12 text-primary' icon={faTrophy} />
                                    <div>
                                        <h3 className='text-lg font-bold text-secondary'>PROFESSIONAL</h3>
                                        <h5 style={{ letterSpacing: "2px" }} className='text-lg'>BEAUTICIANS</h5>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 sm:gap-5'>
                                    <FontAwesomeIcon className='w-12 h-12 text-primary' icon={faPercentage} />
                                    <div>
                                        <h3 className='text-lg font-bold text-secondary'>SPECIAL OFFERS</h3>
                                        <h5 style={{ letterSpacing: "2px" }} className='text-lg'>FOR YOU</h5>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 sm:gap-5'>
                                    <FontAwesomeIcon className='w-12 h-12 text-primary' icon={faSquareCheck} />
                                    <div>
                                        <h3 className='text-lg font-bold text-secondary'>5 YEAR +</h3>
                                        <h5 style={{ letterSpacing: "2px" }} className='text-lg'>EXPERIENCE</h5>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 sm:gap-5'>
                                    <FontAwesomeIcon className='w-12 h-12 text-primary' icon={faGears} />
                                    <div>
                                        <h3 className='text-lg font-bold text-secondary'>AWESOME</h3>
                                        <h5 style={{ letterSpacing: "2px" }} className='text-lg'>SERVICES</h5>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 sm:gap-5'>
                                    <FontAwesomeIcon className='w-12 h-12 text-primary' icon={faPeopleGroup} />
                                    <div>
                                        <h3 className='text-lg font-bold text-secondary'>INCREDIBLE</h3>
                                        <h5 style={{ letterSpacing: "2px" }} className='text-lg'>PARLOUR TEAM</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sm:w-6/12 mt-5 sm:mt-0'>
                            <img src={picture} className="w-full rounded-lg" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;