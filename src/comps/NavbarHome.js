import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavbarHome = () => {
    return(
        <>
        <nav>
            <Link
            to='/'
            className='nav-links'>
            Home
            </Link>

            <Link
            to='/legal'
            className='nav-links'>
            Legal
            </Link>

            <Link
            to='/register'
            className='nav-links'>
            Registrarse
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