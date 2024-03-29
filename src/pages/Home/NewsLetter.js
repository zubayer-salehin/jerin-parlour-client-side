import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import "./Testimonials.css"

const NewsLetter = () => {

    const [newsletter, setNewsLetter] = useState("");

    const handleEmail = (e) => {
        setNewsLetter(e.target.value);
    }

    const handleNewsletter = () => {
        setNewsLetter("");
    }

    return (
        <div className="newslatterBackground">
            <div className='customContainer'>
                <div className='text-secondary text-center pt-20 pb-28'>
                    <FontAwesomeIcon className='text-4xl text-primary' icon={faSpa}></FontAwesomeIcon>
                    <h3 className='text-3xl font-bold'>Jerin Parlour</h3>
                    <h3 className='text-sm font-semibold'>Beauty Spa & Salon</h3>
                    <h3 className='text-xl font-semibold mt-8 mb-5'>Subscribe To Our Newsletter</h3>
                    <p className='text-sm mb-5'>If You Have Any Questions, You Can Contact With Us So That We Can Give You A Satisfying Answer. Subscribe <br /> To Our Newsletter To Get Our Latest Products.</p>
                    <input style={{ borderRadius: "25px" }} type="text" onChange={(e) => handleEmail(e)} value={newsletter} placeholder="Your Email Address" className="input w-full sm:w-5/12 mr-5 contactInput rounded-3xl" />
                    <button onClick={() => handleNewsletter()} className='btn btn-primary rounded-full text-white font-seimibold capitalize mt-5 sm:mt-0'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;