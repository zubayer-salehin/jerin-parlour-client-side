import React from 'react';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import line from "../../assets/Line/line.png"
import line1 from "../../assets/Line/line1.png"
import "./Testimonials.css"
import pic1 from "../../assets/Team/pic1.jpg"
import pic2 from "../../assets/Team/pic2.jpg"
import pic3 from "../../assets/Team/pic3.jpg"
import pic4 from "../../assets/Team/pic4.jpg"


const Team = () => {
    return (
        <div id='team'>
            <div className="customContainer">
                <div className='pt-24 pb-20'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-secondary text-center pb-3 leading-tight sm:leading-none'>Our Professional <span className='text-primary'> Team</span></h2>
                    <div className='flex items-center justify-center mb-12'>
                        <img className='w-20 h-4 mr-2' src={line} alt="" />
                        <FontAwesomeIcon className='text-3xl text-primary' icon={faSpa}></FontAwesomeIcon>
                        <img className='w-20 h-4 ml-2' src={line1} alt="" />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 sm:gap-10'>
                        <div className='team'>
                            <div className='pt-5 pr-5 pl-5 flex sm:flex-none justify-center'>
                                <img className='rounded-full' src={pic1} alt="" />
                            </div>
                            <div className='pt-5 text-center'>
                                <h3 className='text-lg font-bold text-primary pb-2.5'>ANN SMITH</h3>
                                <p className='text-slate-500 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            </div>
                        </div>
                        <div className='team'>
                            <div className='pt-5 pr-5 pl-5 flex sm:flex-none justify-center'>
                                <img className='rounded-full' src={pic2} alt="" />
                            </div>
                            <div className='pt-5 text-center'>
                                <h3 className='text-lg font-bold text-primary pb-2.5'>MARY LUCAS</h3>
                                <p className='text-slate-500 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            </div>
                        </div>
                        <div className='team'>
                            <div className='pt-5 pr-5 pl-5 flex sm:flex-none justify-center'>
                                <img className='rounded-full' src={pic3} alt="" />
                            </div>
                            <div className='pt-5 text-center'>
                                <h3 className='text-lg font-bold text-primary pb-2.5'>JENNIFER</h3>
                                <p className='text-slate-500 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            </div>
                        </div>
                        <div className='team'>
                            <div className='pt-5 pr-5 pl-5 flex sm:flex-none justify-center'>
                                <img className='rounded-full' src={pic4} alt="" />
                            </div>
                            <div className='pt-5 text-center'>
                                <h3 className='text-lg font-bold text-primary pb-2.5'>CANDICE MARSHALL</h3>
                                <p className='text-slate-500 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;