import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import "./ServiceBooking.css";


const ServiceBooking = () => {

    const stringDateConvertIntoDayMonthYear = (date) => {
        const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dateSplit = date.split('/');
        let day = dateSplit[1];
        let month = dateSplit[0];
        let year = dateSplit[2];
        month = monthName[Number(month - 1)]
        return `${day}-${month}-${year}`
    }


    // Booking Dates
    let day = new Date();
    let day1 = stringDateConvertIntoDayMonthYear(day.toLocaleDateString());
    let day2 = new Date(day);
    day2.setDate(day.getDate() + 1);
    day2 = stringDateConvertIntoDayMonthYear(day2.toLocaleDateString());
    let day3 = new Date(day);
    day3.setDate(day.getDate() + 2);
    day3 = stringDateConvertIntoDayMonthYear(day3.toLocaleDateString());
    let day4 = new Date(day);
    day4.setDate(day.getDate() + 3);
    day4 = stringDateConvertIntoDayMonthYear(day4.toLocaleDateString());
    let day5 = new Date(day);
    day5.setDate(day.getDate() + 4);
    day5 = stringDateConvertIntoDayMonthYear(day5.toLocaleDateString());
    let day6 = new Date(day);
    day6.setDate(day.getDate() + 5);
    day6 = stringDateConvertIntoDayMonthYear(day6.toLocaleDateString());
    let day7 = new Date(day);
    day7.setDate(day.getDate() + 6);
    day7 = stringDateConvertIntoDayMonthYear(day7.toLocaleDateString());

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [selectDate, setSelectDate] = useState(day1);
    const [service, setService] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch(`https://morning-brushlands-93158.herokuapp.com/services/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setService(data);
                setLoading(false);
            })
    }, [id])

    const { data: singleService } = useQuery(["available", selectDate, id], () => fetch(`https://morning-brushlands-93158.herokuapp.com/available?date=${selectDate}&&id=${id}`)
        .then(res => res.json())
    );

    const handleServiceBookingFormSubmit = (e) => {

        e.preventDefault();
        const clientName = user?.displayName;
        const clientEmail = user?.email;
        const date = e.target.date.value;
        const slot = e.target.slot.value;
        const address = e.target.address.value;
        const phone = e.target.phoneNumber.value;
        const booking = { clientName, clientEmail, treatment: service?.name, date, slot, address, phone, price: service?.price }


        fetch("https://morning-brushlands-93158.herokuapp.com/booking", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${service?.name} Booking is done at ${slot}`)
                    navigate(`/payToProced/${data.insertedId}`);
                } else {
                    toast.warning(`${service?.name} Already have booked at ${data?.booking?.slot}`);
                }
            })
    }

    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='flex justify-center'>
            <div className='w-11/12 sm:max-w-fit 2xl:pt-10'>
                <div className='px-5 sm:px-14 py-4 sm:py-10 shadow-2xl'>
                    <h2 style={{ wordSpacing: "3px" }} className='text-2xl text-secondary font-bold'>Booking For <span className='text-primary'>{service?.name}</span></h2>
                    <form onSubmit={handleServiceBookingFormSubmit}>
                        <div className='grid grid-cols-1 gap-2.5 mt-5'>
                            <div className="form-control grid grid-cols-12 items-center">
                                <p className='col-span-4 inputFontSize font-semibold'
                                >Name <span className='font-bold sm:ml-2'>:</span></p>
                                <input type="text" name='name' value={user?.displayName} placeholder="" className="input input-bordered col-span-8 inputDegine" required disabled />
                            </div>
                            <div className="form-control grid grid-cols-12 items-center">
                                <p className='col-span-4 inputFontSize font-semibold'
                                >Email <span className='font-bold sm:ml-2'>:</span></p>
                                <input type="email" name='email' value={user?.email} placeholder="" className="input input-bordered col-span-8 inputDegine" required disabled />
                            </div>
                            <div className="form-control grid grid-cols-12 items-center">
                                <p className='col-span-4 inputFontSize font-semibold'
                                >Select Date <span className='font-bold sm:ml-2'>:</span></p>
                                <select name='date' onChange={(e) => setSelectDate(e.target.value)} className="select inputDegine inputFontSize font-normal col-span-8">
                                    <option value={day1}>{day1}</option>
                                    <option value={day2}>{day2}</option>
                                    <option value={day3}>{day3}</option>
                                    <option value={day4}>{day4}</option>
                                    <option value={day5}>{day5}</option>
                                    <option value={day6}>{day6}</option>
                                    <option value={day7}>{day7}</option>
                                </select>
                            </div>
                            <div className="form-control grid grid-cols-12 items-center">
                                <p className='col-span-4 inputFontSize font-semibold'
                                >Select Time <span className='font-bold sm:ml-2'>:</span></p>
                                <select name='slot' className="select inputDegine inputFontSize font-normal col-span-8" >
                                    {singleService?.slots?.map(time => <option key={Math.random() * 1000} value={time}>{time}</option>)}
                                </select>
                            </div>
                            <div className="form-control grid grid-cols-12 items-center">
                                <p className='col-span-4 inputFontSize font-semibold'
                                >Address <span className='font-bold sm:ml-2'>:</span></p>
                                <input type="text" name='address' placeholder="Address" className="input input-bordered col-span-8 inputDegine" required />
                            </div>
                            <div className="form-control grid grid-cols-12 items-center">
                                <p className='col-span-4 inputFontSize font-semibold'
                                >Phone Number <span className='font-bold sm:ml-2 sm:mr-4'>:</span></p>
                                <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered col-span-8 inputDegine" required />
                            </div>
                            <input type="submit" className='btn btn-primary text-white mt-3 capitalize' value="Booking Confirm" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceBooking;