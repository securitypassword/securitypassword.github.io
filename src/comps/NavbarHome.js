import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavbarHome = () => {
    return(
        <>
        <nav>
            <Link
            to='/register'
            className='nav-links'>
            Registrarse
            </Link>

            <Link
            to='/'
            className='nav-links'>
            Home
            </Link>

            <Link
            to='/login'
            className='nav-links'>
            Login
            </Link>
        </nav>
        <Outlet />
        </>
    )
}

export default NavbarHome