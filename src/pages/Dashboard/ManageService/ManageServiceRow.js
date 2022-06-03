import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const ManageServiceRow = ({ service, index, setServiceModal }) => {

    const { image, name, price, slots } = service;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className='flex justify-center'><img className='w-8' src={image} alt="" /></div></td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <select className="select select-bordered">
                    {slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                </select>
            </td>
            <td>
                <label onClick={() => setServiceModal(service)} htmlFor="deleteServiceConfirmModal" className='btn-sm py-2 rounded sm:btn btn-delete'><FontAwesomeIcon className='mr-1' icon={faTrashCan}></FontAwesomeIcon> Delete</label>
            </td>
        </tr>
    );
};

export default ManageServiceRow;