import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavbarPass = () => {
    return(
        <>
        <br></br>
        <nav>
            <Link
            to='/newpassword'
            className='nav-links'>
            New Password
            </Link>
            <Link
            to='/passwords'
            className='nav-links'>
            Get Passwords
            </Link>
            <Link
            to='/bin'
            className='nav-links'>
            Bin
            </Link>
            <Link
            to='/logout'
            className='nav-links'>
            LogOut
            </Link>

        </nav>
        <Outlet />
        </>
    )
}

export default NavbarPass