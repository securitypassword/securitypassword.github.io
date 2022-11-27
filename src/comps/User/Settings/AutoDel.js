import React, { useEffect, useState } from "react";
import { BotonCheck } from "../../Botones/botones";
import Auth from "../../Tokens/Auth";
import axios from "../../../api/axios";

//const AUTO_DEL_URL = process.env.API_URL + "/autoDel"
const AUTO_DEL_URL = "https://securitypassword.cyclic.app/autoDel"
const GET_AUTO_DEL_URL = "https://securitypassword.cyclic.app/getAutoDel"

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
    if(resp.data.data=="error"){
        setError(resp.data.msg)
    }
    if(resp.data.data=="success"){
        const msg = "auto delete set to " + resp.data.data
        resp=resp.data.data
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
    if(resp.data.data=="error"){
        setError(resp.data.msg)
    }
    if(resp.data.data=="success"){
        const msg = "auto delete set to " + resp.data.data
        resp=resp.data.data
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
        getAutoDel().then(function(resp){
            setAuto(resp)
        })
    },[setAuto])
    return(
        <>
        <Auth></Auth>
        <p>{error}</p>
        <BotonCheck seleccionado={auto} click={changeAuto}></BotonCheck>
        </>
    )
}

export default AutoDel