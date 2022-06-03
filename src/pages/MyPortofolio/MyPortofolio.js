import React from 'react';
import MyInformation from './MyInformation';
import TypeAnimation from 'react-type-animation';


const MyPortofolio = () => {
    return (
        <>
            <div className="hero px-24 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-5/12'>
                        <img className='w-5/6 rounded-full' src={"My project.jpg"} alt='' />
                    </div>
                    <div className='w-7/12'>
                        <h5 className='text-2xl font-bold mb-3'>Hello! I'm</h5>
                        <h2 className='text-4xl font-bold'>Zubayer Salehin</h2>
                        <h5 className='text-3xl font-semibold mt-3'>I am Web Developer</h5>
                        <p className="py-5 w-11/12">My name is zubayer salehin. I am a web developer. I build think for web. I build everythink for everythink from small business to reach web interactive apps. If you are business seeking a web presence or an employer looking to hire. you can get touch with me there...</p>
                        <button className="btn btn-primary text-white capitalize">click here</button>
                    </div>
                </div>
            </div>
            <MyInformation></MyInformation>
        </>
    );
};

export default MyPortofolio;