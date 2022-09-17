import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Testimonials.css"
import image1 from "../../assets/Portofolio/pic1.jpg"
import image2 from "../../assets/Portofolio/pic2.jpg"
import image3 from "../../assets/Portofolio/pic3.jpg"
import image4 from "../../assets/Portofolio/pic4.jpg"
import image5 from "../../assets/Portofolio/pic5.jpg"
import image6 from "../../assets/Portofolio/pic6.jpg"
import image7 from "../../assets/Portofolio/pic7.jpg"
import image8 from "../../assets/Portofolio/pic8.jpg"
import line from "../../assets/Line/line.png"
import line1 from "../../assets/Line/line1.png"


const Portfolio = () => {
    return (
        <div className='pt-24 px-4'>
            <h2 className='text-4xl font-bold text-secondary text-center pb-3 leading-tight sm:leading-none'>Our <span className='text-primary'>Portfolio</span></h2>
            <div className='flex items-center justify-center mb-12'>
                <img className='w-20 h-4 mr-2' src={line} alt="" />
                <FontAwesomeIcon className='text-3xl text-primary' icon={faSpa}></FontAwesomeIcon>
                <img className='w-20 h-4 ml-2' src={line1} alt="" />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-2.5'>
                <img className='w-full h-full object-cover' src={image1} alt="" />
                <img className='w-full h-full object-cover' src={image2} alt="" />
                <img className='w-full h-full object-cover' src={image3} alt="" />
                <img className='w-full h-full object-cover' src={image4} alt="" />
                <img className='w-full h-full object-cover' src={image5} alt="" />
                <img className='w-full h-full object-cover' src={image6} alt="" />
                <img className='w-full h-full object-cover' src={image7} alt="" />
                <img className='w-full h-full object-cover' src={image8} alt="" />
            </div>
        </div>
    );
};

export default Portfolio;