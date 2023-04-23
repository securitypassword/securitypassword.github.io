import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const NavbarPass = () => {
    return(
        <>
        <br></br>
        <table className='navbar-container'>
            <th>
                <div className='nav-item'>
                    <Link
                    to='/newpassword'
                    className='nav-links'>
                    Nueva contraseña
                    </Link>
                </div>
            </th>
            <th>
                <div className='nav-item'>
                    <Link
                    to='/passwords'
                    className='nav-links'>
                    Contraseñas
                    </Link>
                </div>
            </th>
            <th>
                <div className='nav-item'>
                    <Link
                    to='/bin'
                    className='nav-links'>
                    Papelera
                    </Link>
                </div>
            </th>
            <th>
                <div className='nav-item'>
                    <Link
                    to='/settings'
                    className='nav-links'>
                    Configuraciones
                    </Link>
                </div>
            </th>
            <th>
                <div className='nav-item'>
                    <Link
                    to='/logout'
                    className='nav-links'>
                    Salir
                    </Link>
                </div>
            </th>
        </table>
        <Outlet></Outlet>
        </>
    )
}

export default NavbarPass