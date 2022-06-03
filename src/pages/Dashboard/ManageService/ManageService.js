import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading/Loading';
import DeleteServiceConfirmModal from './DeleteServiceConfirmModal';
import ManageServiceRow from './ManageServiceRow';


const ManageService = () => {

    const [serviceModal, setServiceModal] = useState(null);
    const url = `https://morning-brushlands-93158.herokuapp.com/services`
    const { data: services, isLoading, refetch } = useQuery('booking', () => fetch(url, {
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
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Manage Service</h2>
            <div className="overflow-x-auto mt-1">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>slots</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => <ManageServiceRow key={service._id} index={index} service={service}
                            setServiceModal={setServiceModal}></ManageServiceRow>)}
                    </tbody>
                </table>
            </div>
            {serviceModal && <DeleteServiceConfirmModal serviceModal={serviceModal} setServiceModal={setServiceModal} refetch={refetch}></DeleteServiceConfirmModal>}
        </div>
    );
};

export default ManageService;