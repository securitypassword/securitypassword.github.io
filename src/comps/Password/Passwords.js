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
       
            <NavbarPass></NavbarPass>
            <br/><br/>
            <div>passwords</div>
            <GetPasswords></GetPasswords>
        
        </>
    )
}

export default Passwords