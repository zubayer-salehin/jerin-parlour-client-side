import React from 'react';
import { toast } from 'react-toastify';

const DeleteServiceConfirmModal = ({ serviceModal, setServiceModal, refetch }) => {

    const { name, _id } = serviceModal

    const handleDelete = () => {
        fetch(`http://localhost:5000/services/${_id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} service is deleted.`)
                    setServiceModal(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="deleteServiceConfirmModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl">Delete Service</h3>
                    <p className="py-4 text-red-500 font-medium">Do you really want to delete {name} service? This process cannot be undone.</p>
                    <div className="modal-action">
                        <label htmlFor="deleteServiceConfirmModal" className="btn btn-success btn-md">Cancle</label>
                        <label onClick={handleDelete} htmlFor="deleteServiceConfirmModal" className="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteServiceConfirmModal;