import React, { useEffect, useState } from "react";
import { BotonCheck } from "../../Botones/botones";
import Auth from "../../Tokens/Auth";
import axios from "../../../api/axios";

//const AUTO_DEL_URL = process.env.API_URL + "/autoDel"
const AUTO_DEL_URL = "https://securitypassword.cyclic.app/autoDel"
//const GET_AUTO_DEL_URL = process.env.API_URL + "/getAutoDel"
const GET_AUTO_DEL_URL = "https://securitypassword.cyclic.app/getAutoDel"

const autoDelMsg = (data) => {
    let msg = "El autoborrado de la cuenta a los 6 intentos fallidos está "
    if(data == "true"){
        msg += "activado"
    }
    else{
        msg += "desactivado"
    }
    return msg
}

const setAutoDel = async (setError) => {
    let resp = ""
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token
    }
    const queryresp = await axios.post(AUTO_DEL_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    if(queryresp.data.data=="error"){
        setError(queryresp.data.msg)
    }
    if(queryresp.data.data=="success"){
        const msg = autoDelMsg(queryresp.data.msg)
        resp=queryresp.data.msg
        setError(msg)
    }
    return resp
}
const getAutoDel = async (setError) => {
    let resp = ""
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token
    }
    const queryresp = await axios.post(GET_AUTO_DEL_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    if(queryresp.data.data=="error"){
        setError(resp.data.msg)
    }
    if(queryresp.data.data=="success"){
        const msg = autoDelMsg(queryresp.data.msg)
        resp=queryresp.data.msg
        setError(msg)
    }
    return resp
}

const AutoDel = () => {
    const [auto, setAuto] = useState(false)
    const [error, setError] = useState("")
    const act = () => {
        const resp = setAutoDel(setError).then(function(resp){return resp})
    }
    const changeAuto = () => {
        setAutoDel(setError).then(function(resp){
            setAuto(resp)
        })
    }

    useEffect(() => {
        getAutoDel(setError).then(function(resp){
            setAuto(resp)
        })
    },[setAuto])
    return(
        <>
        <Auth></Auth>
        <br></br><br></br>
        <p>{error}</p>
        
        <BotonCheck seleccionado={auto} click={changeAuto}></BotonCheck>
        </>
    )
}

export default AutoDel