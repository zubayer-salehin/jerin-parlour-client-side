import React from 'react';
import { toast } from 'react-toastify';

const DeleteBookingListConfirmModal = ({ bookingModal, setBookingModal, refetch }) => {

    const { treatment, _id } = bookingModal

    const handleDelete = () => {
        fetch(`https://morning-brushlands-93158.herokuapp.com/booking/${_id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "authorization":`Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Booking: ${treatment} is deleted.`)
                    setBookingModal(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="deleteConfirmModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl">Delete Booking</h3>
                    <p className="py-4 text-red-500 font-medium">Do you really want to delete {treatment} booking? This process cannot be undone.</p>
                    <div className="modal-action">
                        <label htmlFor="deleteConfirmModal" className="btn btn-success btn-md">Cancle</label>
                        <label onClick={handleDelete} htmlFor="deleteConfirmModal" className="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBookingListConfirmModal;