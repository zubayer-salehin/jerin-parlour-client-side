import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../../shared/Loading/Loading';
import BookingListRow from './BookingListRow';
import DeleteBookingListConfirmModal from './DeleteBookingListConfirmModal';

const BookingList = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;
    const [bookingModal, setBookingModal] = useState(null);
    const url = `https://morning-brushlands-93158.herokuapp.com/booking?email=${email}`
    const { data: bookings, isLoading, refetch } = useQuery('booking', () => fetch(url, {
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
        <div>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Booking List</h2>
            <div className="overflow-x-auto mt-1">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>treatment</th>
                            <th>Price</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((book, index) => <BookingListRow key={book._id} index={index} booking={book}
                            setBookingModal={setBookingModal}></BookingListRow>)}
                    </tbody>
                </table>
            </div>
            {bookingModal && <DeleteBookingListConfirmModal bookingModal={bookingModal} setBookingModal={setBookingModal} refetch={refetch}></DeleteBookingListConfirmModal>}
        </div>
    );
};

export default BookingList;