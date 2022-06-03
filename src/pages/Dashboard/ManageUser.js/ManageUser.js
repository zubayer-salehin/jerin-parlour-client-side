import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading/Loading';
import DeleteManageUserConfirmModal from './DeleteManageUserConfirmModal';
import ManageUserRow from './ManageUserRow';


const ManageUser = () => {

    const [userModal, setUserModal] = useState(null);
    const url = `https://morning-brushlands-93158.herokuapp.com/users`
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(url, {
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
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Manage user</h2>
            <div className="overflow-x-auto mt-1">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <ManageUserRow key={user._id} index={index} user={user}
                            setUserModal={setUserModal}></ManageUserRow>)}
                    </tbody>
                </table>
            </div>
            {userModal && <DeleteManageUserConfirmModal userModal={userModal} setUserModal={setUserModal} refetch={refetch}></DeleteManageUserConfirmModal>}
        </div>
    );
};

export default ManageUser;