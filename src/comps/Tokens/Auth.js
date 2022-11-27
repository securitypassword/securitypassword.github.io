import React, { useState } from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import axios from "../../api/axios"
import { useAsync } from 'react-async';

//const AUTH_URL = process.env.API_URL + "/loginToken"
const AUTH_URL = "https://securitypassword.cyclic.app/loginToken"

var valid = false

export const authquery = async (ifValid, ifNotValid) => {
    let token = window.sessionStorage.getItem("token")
    console.log("token",token)
    if(token != undefined && token!= "" && token != null){
    const query = {
        token:token
    }
        const resp = await axios.post(AUTH_URL,
            JSON.stringify(query),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        console.log("authentify token",resp)
        if(resp.data.msg==='not found'){
            valid = false
            console.log("auth failed")
        }
        if(resp.data.msg==='found'){
            valid = true
            console.log("auth success")
        }
    }
    return valid
}

const Auth = () => {
    const location = useLocation();
    authquery().then(function(valid){
        if(!valid){
            window.location.href = "/login"
        }
    })
}

export default Auth