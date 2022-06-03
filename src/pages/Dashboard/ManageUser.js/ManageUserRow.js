import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const ManageServiceRow = ({ user, index, setUserModal }) => {

    const [users] = useAuthState(auth);
    const { name, email, role } = user;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {role ?
                    <span className='bg-green-500 text-white px-4 py-1  rounded-full'>Admin</span>
                    :
                    <>
                        <span className='bg-slate-600 text-white px-4 py-1  rounded-full'>User</span>
                    </>
                }
            </td>
            <td>
                {
                    users?.email === email ?
                        <label className={`btn-sm py-2 btn-disabled rounded sm:btn btn-green`}><FontAwesomeIcon className='mr-1' icon={faCrown}></FontAwesomeIcon>Current User</label>
                        :
                        <label onClick={() => setUserModal(user)} htmlFor="deleteUserConfirmModal" className={`btn-sm py-2 rounded sm:btn btn-delete`}><FontAwesomeIcon className='mr-1' icon={faTrashCan}></FontAwesomeIcon> Delete</label>
                }
            </td>
        </tr>
    );
};

export default ManageServiceRow;