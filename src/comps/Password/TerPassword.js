import React, { useState } from "react";
import axios from "../../api/axios";
import Auth from "../Tokens/Auth";
import { useNavigate } from 'react-router-dom';


//const DEL_REG_URL = process.env.API_URL + "/terReg"
const DEL_REG_URL = "https://securitypassword.cyclic.app/terReg"

//global
var id = ""

//solicitar a la api la eliminacion de una contraseña
export const terPass = async (id, setError, navigate) => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token,
        id:id
    }
    const resp = await axios.post(DEL_REG_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );

    if(resp.data.data==='error'){
        setError(resp.data.msg)
    }
    if(resp.data.data=='succes'){
        navigate("/bin");
    }

}

//principal
const TerPassword = (parms) => {
    const navigate = useNavigate();
    
    const [error, setError] = useState("")
    id = parms.id

    const ter = async () => {
        await terPass(id, setError, navigate)
    }

    //boton para ejecutar la eliminacion
    return(
        <>
        <Auth></Auth>
        <>{error}</>
        <button onClick={ter} >Terminar</button>
        </>
    )
}

export default TerPassword