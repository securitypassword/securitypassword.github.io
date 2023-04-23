import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import "./Password.css"

const NavbarPass = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const valid = authquery().then(function(valid){
            return valid
        })
        let resp = ""
        if(!valid){
            navigate("/logout");
        }
    })
    return(
        <>
        <br></br>
        <table className='table'>
            <th className='celda'>
                <Link
                to='/newpassword'
                className='nav-links'>
                Nueva contraseña
                </Link>
            </th>
            <th className='celda'>
                <Link
                to='/passwords'
                className='nav-links'>
                Contraseñas
                </Link>
            </th>
            <th className='celda'>
                <Link
                to='/bin'
                className='nav-links'>
                Papelera
                </Link>
            </th>
            <th className='celda'>
                <Link
                to='/settings'
                className='nav-links'>
                Configuraciones
                </Link>
            </th>
            <th className='celda'>
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