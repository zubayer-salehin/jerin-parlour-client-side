import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const ManageBookingRow = ({ booking, index, setManageBookingModal }) => {

    const { clientEmail, clientName, paid, treatment } = booking;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{clientName}</td>
            <td>{clientEmail}</td>
            <td>{treatment}</td>
            <td>

                {
                    paid ?
                        <span className='bg-green-200 text-green-500 px-3 py-1  rounded-full'> <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Paid</span>
                        :
                        <span className='bg-yellow-200 text-yellow-500 px-3 py-1 rounded-full'> <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon> Pending</span>
                }

            </td>
            <td>
                <label onClick={() => setManageBookingModal(booking)} htmlFor="deleteManageBookingModalConfirm" className='btn-sm py-2 rounded sm:btn btn-delete'><FontAwesomeIcon className='mr-1' icon={faTrashCan}></FontAwesomeIcon> Delete</label>
            </td>
        </tr>
    );
};

export default ManageBookingRow;