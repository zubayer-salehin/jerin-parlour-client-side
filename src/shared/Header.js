import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from "../assets/Website-Logo/Group 33092.png"
import auth from '../firebase.init';
import { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Header = () => {

    const location = useLocation();
    const [user] = useAuthState(auth);
    const [navbar, setNavbar] = useState(false);
    const noScroll = "navbar sticky top-0 py-3 z-20 bg-white";
    const scrolly = "navbar sticky top-0 py-3 z-20 bg-white navbarScrollBoxShadow";
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        setActiveLink(location.pathname + location.hash);
    }, [location, activeLink])

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
            <Link className={`${activeLink === "/home" ? "text-primary" : ""}`} smooth to="/home#" >Home</Link>
        </li>
        <li>
            <Link className={`${activeLink === "/home#services" ? "text-primary" : ""}`} smooth to="/home#services">Services</Link>
        </li>
        {user &&
            <li>
                <Link className={`${activeLink === "/dashboard" ? "text-primary" : ""}`} smooth to="/dashboard">Dashboard</Link>
            </li>}
        <li>
            <Link className={`${activeLink === "/home#about-us" ? "text-primary" : ""}`} smooth to="/home#about-us">About Us</Link>
        </li>
        <li>
            <Link className={`${activeLink === "/home#team" ? "text-primary" : ""}`} smooth to="/home#team">Team</Link>
        </li>
        <li className='mr-4'>
            <Link className={`${activeLink === "/home#contact" ? "text-primary" : ""}`} smooth to="/home#contact">Contact</Link>
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
            <div className='customContainer navbarPaddingZero'>
                <div className="flex sm:w-3/12">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-base-100 w-52">
                            {menubar}
                        </ul>
                    </div>
                    <Link className='flex items-center' to="/home#"><img className='logo' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex sm:w-9/12">
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
        </div>
    );
};

export default Header;