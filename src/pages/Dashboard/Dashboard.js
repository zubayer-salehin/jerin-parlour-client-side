import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faHouseChimney, faList, faListCheck, faPlus, faUserCheck, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-open" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mr-5 ml-5">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-open" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 border-r-2 sm:bg-transparent">
                    <li className='font-bold border-b-2 border-primary'><div><FontAwesomeIcon className='text-primary' icon={faHouseChimney}></FontAwesomeIcon> Dashboard</div></li>
                    <li className='border-b-2'><Link className='font-medium' to="/dashboard"> <FontAwesomeIcon className='text-primary' icon={faUserCheck}></FontAwesomeIcon> My Profile</Link></li>
                    {!admin ?
                        <>
                            <li className='border-b-2'><Link className='font-medium' to="/dashboard/bookingList"> <FontAwesomeIcon className='text-primary' icon={faCartShopping}></FontAwesomeIcon> Booking list</Link></li>
                            <li className='border-b-2'><Link className='font-medium' to="/dashboard/addReveiw"> <FontAwesomeIcon className='text-primary' icon={faCommentDots}></FontAwesomeIcon> Add Reveiw</Link></li>
                        </>
                        :
                        <>
                            <li className='border-b-2'><Link className='font-medium' to="/dashboard/manageBooking"> <FontAwesomeIcon className='text-primary' icon={faList}></FontAwesomeIcon> Manage Booking</Link></li>
                            <li className='border-b-2'><Link className='font-medium' to="/dashboard/addService"> <FontAwesomeIcon className='text-primary' icon={faPlus}></FontAwesomeIcon>Add Service</Link></li>
                            <li className='border-b-2'><Link className='font-medium' to="/dashboard/manageService"> <FontAwesomeIcon className='text-primary' icon={faListCheck}></FontAwesomeIcon> Manage Service</Link></li>
                            <li className='border-b-2'><Link className='font-medium' to="/dashboard/manageUser"> <FontAwesomeIcon className='text-primary' icon={faUsers}></FontAwesomeIcon> Manage User</Link></li>
                            <li className='border-b-2'><Link className='font-medium' to="/dashboard/makeAdmin"> <FontAwesomeIcon className='text-primary' icon={faUserPlus}></FontAwesomeIcon> Make Admin</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;