import React, { useEffect } from 'react';
import { authquery } from '../Tokens/Auth';
import Auth from '../Tokens/Auth';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import "./Password.css"

const NavbarPass = () => {
    const navigate = useNavigate();
    /*
    const auth = async () => {
        const valid = await authquery().then(function(valid){
            return valid
        })
        if(!valid){
            navigate("/logout");
        }
        return 1
    }
    
    //obtener y guardar contraseñas al iniciar
	useEffect(() => {
        auth().then(function(resp){
            return resp
        })

    }, [auth])
    */
    return(
        <>
        <Auth></Auth>
        <br></br>
        <center>
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
        </center>
        </>
    )
}

export default NavbarPass