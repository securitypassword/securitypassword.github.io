import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavbarPass = () => {
    return(
        <>
        <nav>
            <Link
            to='/register'
            className='nav-links'>
            Registrarse
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