import React from 'react';
import picture from "../../assets/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.jpg"

const Summary = () => {
    return (
        <div className="hero bg-accent sm:py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='sm:w-4/12 sm:ml-16'>
                    <h2 className="text-4xl font-bold text-neutral leading-tight">Let us handle your screen <span className='text-primary'>Professionally</span></h2>
                    <p className="py-5 text-sm text-slate-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='flex pt-5 sm:pt-8'>
                        <div>
                            <h3 className='text-4xl font-bold text-primary pb-2'>500+</h3>
                            <h5>Happy Customer</h5>
                        </div>
                        <div className='ml-16'>
                            <h3 className='text-4xl font-bold text-primary pb-2'>16+</h3>
                            <h5>Total Service</h5>
                        </div>
                    </div>
                </div>
                <div className='sm:w-5/12 mt-5 sm:mt-0'>
                    <img src={picture} className="w-full rounded-lg" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Summary;