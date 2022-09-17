import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from "../assets/Website-Logo/Group 33092.png"
import auth from '../firebase.init';
import { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {

    const [user] = useAuthState(auth);
    const [navbar, setNavbar] = useState(false);
    const noScroll = "2xl:max-w-7xl mx-auto navbar sticky top-0 sm:px-20 2xl:px-0 py-4 z-20 bg-white";
    const scrolly = "2xl:max-w-7xl mx-auto navbar sticky top-0 sm:px-20 2xl:px-0 py-4 z-20 bg-white navbarScrollBoxShadow";

    const scrollWindow = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollWindow)

    const menubar = <>
        <li>
            <Link smooth to="/home#" >Home</Link>
        </li>
        <li>
            <Link smooth to="/home#services">Services</Link>
        </li>
        {user &&
            <li>
                <Link smooth to="/dashboard">Dashboard</Link>
            </li>}
        <li>
            <Link smooth to="/home#about-us">About Us</Link>
        </li>
        <li>
            <Link smooth to="/home#team">Team</Link>
        </li>
        <li className='mr-4'>
            <Link smooth to="/home#contact">Contact</Link>
        </li>
        {
            user ?
                <button onClick={() => {
                    signOut(auth)
                    localStorage.removeItem("accessToken")
                }} className="btn btn-primary text-base-100 font-medium capitalize px-5 bg-primary rounded-sm" to="/login">Sign Out</button>
                :
                <li><Link className="btn btn-primary text-base-100 font-medium capitalize px-8 bg-primary rounded-sm" smooth to="/login">Login</Link></li>
        }
    </>

    return (
        <div className={navbar ? scrolly : noScroll}>
            <div className="navbar-start sm:w-3/12">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menubar}
                    </ul>
                </div>
                <Link to="/" className="w-32 h-12"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex w-9/12">
                <ul className="menu menu-horizontal p-0">
                    {menubar}
                </ul>
            </div>
            <div className="navbar-end text-right block lg:hidden mr-7">
                <label htmlFor="dashboard-open" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;