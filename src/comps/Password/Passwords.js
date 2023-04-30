import React, { useEffect} from 'react';
import { auth } from '../Tokens/Auth';
import NavbarPass from './NavbarPass';
import GetPasswords from './GetPasswords';

const Passwords = () => {
    useEffect(() => {
        auth()
    }, [])
    return(
        <>
        <div 
            style={{background: `linear-gradient(to bottom right, #212139, #45189f, #212139)`}}>
            <NavbarPass></NavbarPass>
            <br/><br/>
            <div>passwords</div>
            <GetPasswords></GetPasswords>
        </div>
        </>
    )
}

export default Passwords