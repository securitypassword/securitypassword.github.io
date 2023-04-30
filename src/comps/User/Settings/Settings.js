import React, { useEffect } from 'react';
import AutoDel from "./AutoDel";
import { auth } from '../../Tokens/Auth';
import NavbarPass from "../../Password/NavbarPass";
import DeleteUser from '../DeleteUser';

const Settings = () => {
    useEffect(() => {
        auth()
    }, [])
    return(
        <>
        <NavbarPass></NavbarPass>
        <AutoDel></AutoDel>
        <br/><br/><br/><br/>
        <DeleteUser/>
        </>
    )
}

export default Settings