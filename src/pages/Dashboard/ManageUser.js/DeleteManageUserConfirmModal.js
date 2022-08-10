import React from 'react';
import { toast } from 'react-toastify';

const DeleteManageUserConfirmModal = ({ userModal, setUserModal, refetch }) => {

    const { name, _id, uid } = userModal

    const handleDelete = () => {
        fetch(`https://morning-brushlands-93158.herokuapp.com/user?id=${_id}&&uid=${uid}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} is deleted.`)
                    setUserModal(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="deleteUserConfirmModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl">Delete User</h3>
                    <p className="py-4 text-red-500 font-medium">Do you really want to delete {name} user? This process cannot be undone.</p>
                    <div className="modal-action">
                        <label htmlFor="deleteUserConfirmModal" className="btn btn-success btn-md">Cancle</label>
                        <label onClick={handleDelete} htmlFor="deleteUserConfirmModal" className="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteManageUserConfirmModal;