import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading/Loading';
import DeleteBookingConfirmModal from './DeleteBookingConfirmModal';
import ManageBookingRow from './ManageBookingRow';


const ManageService = () => {

    const [manageBookingModal, setManageBookingModal] = useState(null);
    const url = `https://jerin-parlour-server-side.onrender.com/allBooking`
    const { data: bookings, isLoading, refetch } = useQuery('allBooking', () => fetch(url, {
        method: 'GET',
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
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Manage Booking</h2>
            <div className="overflow-x-auto mt-1">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>treatment</th>
                            <th>payment status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => <ManageBookingRow key={booking._id} index={index} booking={booking}
                            setManageBookingModal={setManageBookingModal}></ManageBookingRow>)}
                    </tbody>
                </table>
            </div>
            {manageBookingModal && <DeleteBookingConfirmModal manageBookingModal={manageBookingModal} setManageBookingModal={setManageBookingModal} refetch={refetch}></DeleteBookingConfirmModal>}
        </div>
    );
};

export default ManageService;