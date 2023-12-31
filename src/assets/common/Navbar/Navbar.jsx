
/* eslint-disable react/jsx-no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMoon } from "react-icons/hi";
// import logo from '../../images/white-logo.png'
import logo from '../../images/logo.png'

import './Navbar.css'
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light")
        }
    }
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className="w-full mx-auto font-semibold text-black navbar navbar-bg" >

            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content rounded-box w-44 btn-bg  dropdown-bg ">
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/'>Home</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/allToy'>All Toy</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/myToy'>My Toy</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/addToy'>Add Toy</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/blog'>Blog</NavLink ></li>
                    </ul>
                </div>
                <Link to='/' className="text-2xl font-semibold "><span className='text-black'>
                    <img className="w-4/12" src={logo} alt="" />

                    {/* <img className="h-[60%] w-[60%] object-contain sm:h-[40%] sm:w-[40%] md:h-[50%] md:w-[50%]" src={logo} alt="" /> */}


                </span></Link>
            </div>

            <div className="hidden navbar-center md:flex">
                <ul className="gap-2 px-1 text-black menu menu-horizontal">
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/allToy'>All Toy</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/myToy'>My Toy</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/addToy'>Add Toy</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/blog'>Blog</NavLink></li>


                </ul>
            </div>

            <div className="flex items-center navbar-end ">
                {
                    <label className="px-1 swap swap-rotate md:px-4">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox"
                            onChange={handleToggle}
                        // checked={theme === "light" ? false : true}
                        />

                        {/* sun icon */}
                        <svg className="w-10 h-10 fill-current swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        {/* <svg className="w-10 h-10 fill-current swap-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg> */}
                        <HiMoon className="w-10 h-10 swap-off "></HiMoon>

                    </label>
                }
                {
                    user && <div className="w-10 h-10 mr-5 rounded-full shadow-lg bg-emerald-500 tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <img className='w-10 h-10 rounded-full' src={user?.photoURL} />
                    </div>
                }
                {
                    user ? <button onClick={handleLogout} className="px-2 py-1 text-black rounded-md md:py-2 logged-in-out">
                        <Link to='/'>Logout</Link>
                    </button>
                        : <button className="px-2 py-1 text-black rounded-md md:py-2 logged-in-out">
                            <Link to='/login'>Login</Link>
                        </button>
                }
            </div>

        </div>
    );
};

export default Navbar;


