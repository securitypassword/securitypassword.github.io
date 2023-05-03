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
            <div style={{marginTop: '150px'}}>
                <div>passwords</div>
                <GetPasswords></GetPasswords>
            </div>
        </>
    )
}

export default Passwords