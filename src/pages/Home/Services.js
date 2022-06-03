import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import BookingModal from '../OrderPlace/BookingModal';
import Service from './Service';

const Services = () => {

    const [treatment,setTreatment] = useState(null);
    const formatedDate = new Date();
    let today = formatedDate.toDateString();

    const { data: services, isLoading,refetch } = useQuery(["available",today], () => fetch(`http://localhost:5000/available?date=${today}`)
        .then(res => res.json())
    );

    if (isLoading) {
        return <Loading loadingStatus="true"></Loading>
    }

    return (
        <div className='px-5 sm:px-32 pb-24'>
            <h2 className='text-4xl font-bold text-secondary text-center pt-20 pb-14 leading-tight sm:leading-none'>Our Awesome <span className='text-primary'>Services</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {services.slice(-3).reverse().map((service,index) => <Service key={service._id} service={service} index={index} setTreatment={setTreatment}></Service>)}
            </div>
            {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default Services;