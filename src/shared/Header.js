import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import logo from "../assets/Group 33092.png"
import auth from '../firebase.init';
import CustomLink from './CustomLink';

const Header = () => {

    const [user] = useAuthState(auth);

    const menubar = <>
        <li className='mr-4 hover:disabled'><CustomLink className="text-sm font-medium" as={Link} to="/home">Home</CustomLink></li>
        {user && <li className='mr-4 hover:disabled'><CustomLink className="text-sm font-medium" as={Link} to="/dashboard">Dashboard</CustomLink></li>}
        <li className='mr-4 hover:disabled'><CustomLink className="text-sm font-medium" as={Link} to="/ourTeam">Our Team</CustomLink></li>
        <li className='mr-4 hover:disabled'><CustomLink className='text-sm font-medium' as={Link} to="/myPortofolio">My Portofolio</CustomLink></li>
        {
            user ?
                <button onClick={() => {
                    signOut(auth)
                    localStorage.removeItem("accessToken")
                }} className="btn btn-primary text-base-100 font-medium capitalize px-5 bg-primary" to="/login">Sign Out</button>
                :
                <li><Link className="btn btn-primary text-base-100 font-medium capitalize px-8 bg-primary" to="/login">Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-accent sm:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menubar}
                    </ul>
                </div>
                <Link to="/" className="w-36 h-12"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex mr-5">
                <ul className="menu menu-horizontal p-0">
                    {menubar}
                </ul>
            </div>
            <div className="navbar-end text-right block md:hidden mr-7">
                <label htmlFor="dashboard-open" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;