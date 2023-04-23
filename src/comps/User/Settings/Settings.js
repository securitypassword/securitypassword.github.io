import React, { useEffect } from 'react';
import AutoDel from "./AutoDel";
import { auth } from '../../Tokens/Auth';
import NavbarPass from "../../Password/NavbarPass";

const Settings = () => {
    useEffect(() => {
        auth()
    }, [])
    return(
        <>
        <NavbarPass></NavbarPass>
        <AutoDel></AutoDel>
        </>
    )
}

export default Settings