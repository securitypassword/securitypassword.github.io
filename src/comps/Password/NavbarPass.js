import React, { useEffect } from 'react';
import { authquery } from '../Tokens/Auth';
import Auth from '../Tokens/Auth';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import "./Password.css"
import './nav2.css'

const NavbarPass = () => {
    const navigate = useNavigate();
    
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

    }, [])
    
    return(
        <>
        <div class="pure-container" data-effect="pure-effect-slide">
            <input type="checkbox" id="pure-toggle-left" class="pure-toggle" data-toggle="left"/>
            <label class="pure-toggle-label" for="pure-toggle-left" data-toggle-label="left">
                <span class="pure-toggle-icon"></span>
            </label>

            <div class="pure-drawer" data-position="left">
                <br/><br/><br/><br/><br/><br/>
                <table>
                    <tr className='celda'>
                        <Link
                        to='/newpassword'
                        className='nav-links'>
                        Nueva contraseña
                        </Link>
                    </tr>
                    <tr className='celda'>
                        <Link
                        to='/passwords'
                        className='nav-links'>
                        Contraseñas
                        </Link>
                    </tr>
                    <tr className='celda'>
                        <Link
                        to='/bin'
                        className='nav-links'>
                        Papelera
                        </Link>
                    </tr>
                    <tr className='celda'>
                        <Link
                        to='/settings'
                        className='nav-links'>
                        Configuraciones
                        </Link>
                    </tr>
                    <br/><br/><br/><br/>
                    <tr className='celda'>
                        <Link
                        to='/logout'
                        className='nav-links'>
                        Salir
                        </Link>
                    </tr>
                </table>
            </div>
        </div>
       {/* <br></br>
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
    </table>*
        
    </center>*/}
    <Outlet></Outlet>
        </>
    )
}

export default NavbarPass