import { faCalendarCheck, faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeCircleCheck, faLocationDot, faSackDollar, faShoppingCart, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';

const PayToProced = () => {

    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [booking, setBooking] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch(`https://jerin-parlour-server-side.onrender.com/booking/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                setLoading(false);
            })
    }, [id])

    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='flex justify-center'>
            <div className='max-w-fit pt-5 2xl:pt-14'>
                <div className='px-10 sm:px-14 py-8 sm:py-10 shadow-2xl'>
                    <h2 className='text-2xl text-secondary font-bold'>Booking Summary</h2>
                    <div className='grid grid-cols-1 gap-3'>
                        <p className='mt-5'> <FontAwesomeIcon className='mr-2 text-primary' icon={faUser}></FontAwesomeIcon> {booking?.clientName}</p>

                        <p> <FontAwesomeIcon className='mr-2 text-primary' icon={faEnvelopeCircleCheck}></FontAwesomeIcon> {booking?.clientEmail}</p>

                        <p> <FontAwesomeIcon className='mr-2 text-primary' icon={faShoppingCart}></FontAwesomeIcon> {booking?.treatment}</p>

                        <p> <FontAwesomeIcon className='mr-2 text-primary' icon={faCalendarCheck}></FontAwesomeIcon> {booking?.date}</p>

                        <p> <FontAwesomeIcon className='mr-2 text-primary' icon={faClock}></FontAwesomeIcon> {booking?.slot}</p>

                        <p> <FontAwesomeIcon className='mr-2 text-primary' icon={faSackDollar}></FontAwesomeIcon> ${booking?.price}</p>

                        <p> <FontAwesomeIcon className='mr-2 text-primary' icon={faLocationDot}></FontAwesomeIcon> {booking?.address}</p>

                        <p> <FontAwesomeIcon className='mr-2 text-primary' icon={faSquarePhone}></FontAwesomeIcon> {booking?.phone}</p>
                        <button onClick={() => navigate(`/payment/${booking?._id}`)} className='btn btn-primary text-white mt-3'>Pay To Proced</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PayToProced;