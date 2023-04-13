import React from "react";
import Auth from "../../Tokens/Auth";
import AutoDel from "./AutoDel";
import Ask from "./Ask";
import NavbarPass from "../../Password/NavbarPass";

const Settings = () => {
    return(
        <>
        <Auth></Auth>
        <NavbarPass></NavbarPass>
        <AutoDel></AutoDel>
        </>
    )
}

export default Settings