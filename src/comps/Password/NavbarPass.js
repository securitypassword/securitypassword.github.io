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
                    Nueva contraseña
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                    to='/passwords'
                    className='nav-links'>
                    Contraseñas
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                    to='/bin'
                    className='nav-links'>
                    Papelera
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                    to='/settings'
                    className='nav-links'>
                    Configuracines
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                    to='/logout'
                    className='nav-links'>
                    Salir
                    </Link>
                </div>
            </div>
        </nav>
        <Outlet></Outlet>
        </>
    )
}

export default NavbarPass