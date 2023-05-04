import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from 'react-router-dom';


//const DEL_REG_URL = process.env.API_URL + "/delReg"
const DEL_REG_URL = "https://securitypassword.cyclic.app/delReg"

//global
var id = ""

//solicitar a la api la eliminacion de una contraseña
export const delPass = async (id, setError, navigate) => {
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
        navigate("/passwords");
    }

}

//principal
const DelPassword = (parms) => {
    const navigate = useNavigate();
    
    const [error, setError] = useState("")
    id = parms.id

    const del = async () => {
        await delPass(id, setError, navigate)
    }

    //boton para ejecutar la eliminacion
    return(
        <>
        <>{error}</>
        <button onClick={del} >
            Terminar
            <i class="bi bi-trash"></i>
        </button>
        </>
    )
}

export default DelPassword