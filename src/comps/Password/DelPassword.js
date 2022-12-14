import React, { useState } from "react";
import axios from "../../api/axios";
import Auth from "../Tokens/Auth";


//const DEL_REG_URL = process.env.API_URL + "/delReg"
const DEL_REG_URL = "https://securitypassword.cyclic.app/delReg"

var id = ""

export const delPass = async (id, setError) => {
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
    console.log("resp",resp)
    if(resp.data.data==='error'){
        setError(resp.data.msg)
    }
    if(resp.data.data=='succes'){
        window.location.href = "/#/passwords"
    }

}


const DelPassword = (parms) => {
    console.log(parms)
    const [error, setError] = useState("")
    id = parms.id

    const del = async () => {
        await delPass(id, setError)
    }

    return(
        <>
        <Auth></Auth>
        <>{error}</>
        <button onClick={del} >Delete</button>
        </>
    )
}

export default DelPassword