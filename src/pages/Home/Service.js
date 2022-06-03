import React from 'react';


const Service = ({ service, setTreatment, index }) => {

    const { image, name, price, description } = service;

    return (
        <div className={`card rounded-md ${index === 1 ? "boxShadow" : ""}`}>
            <div className="card-body items-center text-center px-10 pt-7 pb-4">
                <div>
                    <img className='w-11 h-11' src={image} alt="" />
                </div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <h2 className='text-xl font-medium text-primary'>${price}</h2>
                <p className="text-slate-500 font-light">{description}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn btn-primary text-base-100 capitalize font-medium">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Service;