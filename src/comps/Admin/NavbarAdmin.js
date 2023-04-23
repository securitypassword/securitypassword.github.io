import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const NavbarAdmin = () => {
    return(
        <>
        <nav>
            <div className='navbar-container'>
                <div className='nav-item'>
                    <Link
                        to='/admin'
                        className='nav-links'>
                        admin
                    </Link>
                </div>
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
        <nav>
            rol : admin
            {/*<Link
            to='/logout'
            className='nav-links'>
            LogOut
            </Link>*/}
        </nav>
        </>
    )
}

export default NavbarAdmin