import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "./Password.css"

const NavbarPass = () => {
    return(
        <>
        <br></br>
        <table className='table'>
            <th>
                <Link
                to='/newpassword'
                className='nav-links'>
                Nueva contraseña
                </Link>
            </th>
            <th>
                <Link
                to='/passwords'
                className='nav-links'>
                Contraseñas
                </Link>
            </th>
            <th>
                <Link
                to='/bin'
                className='nav-links'>
                Papelera
                </Link>
            </th>
            <th>
                <Link
                to='/settings'
                className='nav-links'>
                Configuraciones
                </Link>
            </th>
            <th>
                <Link
                to='/logout'
                className='nav-links'>
                Salir
                </Link>
            </th>
        </table>
        <Outlet></Outlet>
        </>
    )
}

export default NavbarPass