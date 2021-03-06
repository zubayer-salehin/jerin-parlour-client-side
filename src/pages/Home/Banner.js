import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-accent">
            <div className="hero-content flex-col lg:flex-row-reverse
            mb-3 justify-center">
                <div className='sm:w-5/12 mt-2 sm:mt-0'>
                    <img src={`https://img.freepik.com/free-photo/beautiul-woman-with-green-make-up-creative-color-nails_186202-7072.jpg?t=st=1654253760~exp=1654254360~hmac=4becc8c96fd1b9682bd1a5bf2733734a1c192f3864cf21a0da34b9b3fad2e192&w=740`} className="max-w sm:w-11/12 rounded-lg" alt='' />
                </div>
                <div className='sm:w-6/12'>
                    <h1 className="text-5xl font-bold leading-tight text-secondary">BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                    <p className="py-6 sm:w-96 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-primary text-base-100 font-medium capitalize px-5 rounded-md">Get an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;