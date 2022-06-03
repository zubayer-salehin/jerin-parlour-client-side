import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingListRow = ({ booking, index,setBookingModal }) => {

    const { _id, clientName, clientEmail, treatment, slot, price, paid } = booking;
    const navigate = useNavigate();

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{clientName}</td>
            <td>{clientEmail}</td>
            <td>{treatment}</td>
            <td>${price}</td>
            <td>{slot}</td>
            <td>
                {paid ?
                    <span className='text-success font-medium'>Payment Successfull</span>
                    :
                    <>
                        <button onClick={() => navigate(`/payment/${_id}`)} className='btn btn-green btn-sm'> <FontAwesomeIcon className='mr-1' icon={faMoneyCheckDollar}></FontAwesomeIcon> pay</button>
                        <label onClick={() => setBookingModal(booking)} htmlFor="deleteConfirmModal" className='btn btn-delete btn-sm ml-3'> <FontAwesomeIcon className='mr-1' icon={faTrashCan}></FontAwesomeIcon> cancle</label>
                    </>
                }
            </td>
        </tr>
    );
};

export default BookingListRow;