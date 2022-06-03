import React from 'react';
import { toast } from 'react-toastify';

const DeleteBookingConfirmModal = ({ manageBookingModal, setManageBookingModal, refetch }) => {

    const { treatment, _id } = manageBookingModal

    const handleDelete = () => {
        fetch(`http://localhost:5000/manageBooking/${_id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${treatment} service is deleted.`)
                    setManageBookingModal(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="deleteManageBookingModalConfirm" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl">Delete Booking</h3>
                    <p className="py-4 text-red-500 font-medium">Do you really want to delete {treatment} Booking? This process cannot be undone.</p>
                    <div className="modal-action">
                        <label htmlFor="deleteManageBookingModalConfirm" className="btn btn-success btn-md">Cancle</label>
                        <label onClick={handleDelete} htmlFor="deleteManageBookingModalConfirm" className="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBookingConfirmModal;