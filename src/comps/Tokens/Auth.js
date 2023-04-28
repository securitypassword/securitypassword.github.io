import React, { useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "../../api/axios"
import { render } from '@testing-library/react';

//const AUTH_URL = process.env.API_URL + "/loginToken"
const AUTH_URL = "https://securitypassword.cyclic.app/loginToken"

var valid = false

export const authquery = async () => {
    let token = window.sessionStorage.getItem("token")
    valid = false
    //si no hay token
    if(token != undefined && token!= "" && token != null){
        const query = {
            token:token
        }
        //conectar con la api
        const resp = await axios.post(AUTH_URL,
            JSON.stringify(query),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        if(resp.data.msg==='not found'){
            //console.log("auth failed")
        }
        if(resp.data.msg==='found'){
            valid = true
            //console.log("auth success")
        }
    }
    return valid
}

export const auth = () => {
    authquery().then(function(valid){
        if(!valid){
            window.sessionStorage.setItem("token", "")
            useNavigate("/login")
        }
        //console.log(window.sessionStorage.getItem("token"));
    })
}

const Auth = () => {
    useEffect(() => {
        auth()
    }, [])
    return (
        <>
        <p></p>
        </>
    )
}

export default Auth