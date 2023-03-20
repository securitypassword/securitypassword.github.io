import React from "react";
import Logout from "../User/Logout";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
    return(
        <>
        <nav>rol : admin
            <Link
            to='/logout'
            className='nav-links'>
            LogOut
            </Link>
        </nav>
        </>
    )
}

export default NavbarAdmin