import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import line from "../../assets/Line/line.png"
import line1 from "../../assets/Line/line1.png"


const Services = () => {

    const navigate = useNavigate();

    const { data: services, isLoading } = useQuery(["allServices"], () => fetch(`https://morning-brushlands-93158.herokuapp.com/allServices`)
        .then(res => res.json())
    );

    if (isLoading) {
        return <Loading loadingStatus="true"></Loading>
    }

    return (
        <div id='services'>
            <div className='2xl:max-w-7xl mx-auto pt-24'>
                <div className='px-8 sm:px-32 pb-5'>
                    <h2 className='text-4xl font-bold text-secondary text-center leading-tight sm:leading-none pb-3'>Our Awesome <span className='text-primary'>Services</span></h2>
                    <div className='flex items-center justify-center mb-12'>
                        <img className='w-20 h-4 mr-2' src={line} alt="" />
                        <FontAwesomeIcon className='text-3xl text-primary' icon={faSpa}></FontAwesomeIcon>
                        <img className='w-20 h-4 ml-2' src={line1} alt="" />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {services.slice(-3).reverse().map((service, index) => <div key={service._id} className={`card rounded-md ${index === 1 ? "boxShadow" : ""}`}>
                            <div className="card-body items-center text-center px-10 pt-7 pb-4">
                                <div>
                                    <img className='w-11 h-11' src={service?.image} alt="" />
                                </div>
                                <h2 className="text-xl font-semibold">{service?.name}</h2>
                                <h2 className='text-xl font-medium text-primary'>${service?.price}</h2>
                                <p className="text-slate-500 font-light">{service?.description}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => navigate(`/serviceBooking/${service._id}`)} className="btn btn-primary text-base-100 capitalize font-medium">Book Now</button>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;