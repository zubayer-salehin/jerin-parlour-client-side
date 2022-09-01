import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';

const Payment = () => {

    const stripePromise = loadStripe('pk_test_51L1LdlFkK6QGOuLXCBCooyA8PvCjeda2eY9cY8BEL5I6fsuz7kvLbqBeNtu65yeVR7stE1GR3xxZrrTf3qrw5qGJ00xmWY3tm7');

    const { id } = useParams();
    const url = `https://morning-brushlands-93158.herokuapp.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading loadingStatus="true"></Loading>
    }

    return (
        <div className='2xl:max-w-7xl mx-auto 2xl:mt-14'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl mx-3 sm:ml-10 mt-5 mb-5">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order?.clientName}</p>
                    <h2 className="card-title">Please Pay for {order?.treatment}</h2>
                    <p className='font-medium'>Pay: ${order?.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-3 sm:ml-10">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;