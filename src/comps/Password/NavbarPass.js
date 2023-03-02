import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const NavbarPass = () => {
    return(
        <>
        <br></br>
        <nav>
            <div className='navbar-container'>
                <div className='nav-item'>
                    <Link
                    to='/newpassword'
                    className='nav-links'>
                    New Password
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                    to='/passwords'
                    className='nav-links'>
                    Get Passwords
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                    to='/bin'
                    className='nav-links'>
                    Bin
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                    to='/settings'
                    className='nav-links'>
                    Settings
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                    to='/logout'
                    className='nav-links'>
                    LogOut
                    </Link>
                </div>
            </div>
        </nav>
        <Outlet></Outlet>
        </>
    )
}

export default NavbarPass