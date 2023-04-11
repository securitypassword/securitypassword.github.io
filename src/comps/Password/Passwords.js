import React from 'react';
import Auth from '../Tokens/Auth';
import NavbarPass from './NavbarPass';
import GetPasswords from './GetPasswords';

const Passwords = () => {
    return(
        <>
        <Auth></Auth>
        <NavbarPass></NavbarPass>
        <br/><br/>
        <div>passwords</div>
        <GetPasswords></GetPasswords>
        </>
    )
}

export default Passwords