import React, { useState } from "react";
import axios from "../../api/axios";
import Auth from "../Tokens/Auth";


//const RES_REG_URL = process.env.API_URL + "/resReg"
const RES_REG_URL = "https://securitypassword.cyclic.app/resReg"

var id = ""

export const resPass = async (id, setError) => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token,
        id:id
    }
    const resp = await axios.post(RES_REG_URL,
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


const ResPassword = (parms) => {
    console.log(parms)
    const [error, setError] = useState("")
    id = parms.id

    const res = async () => {
        await resPass(id, setError)
    }

    return(
        <>
        <Auth></Auth>
        <>{error}</>
        <button onClick={res} >Restore</button>
        </>
    )
}

export default ResPassword