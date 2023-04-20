import React from "react";
import NavbarAdmin from "./NavbarAdmin";
import Count from "./Count";

//la interfaz para admins
const Admin = () => {
    return(
        <>
        <NavbarAdmin></NavbarAdmin>
        <center>
            <Count></Count>
        </center>
        </>
    )
}

export default Admin