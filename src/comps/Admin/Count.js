import React from "react";
import {  useState, useEffect } from 'react';
import axios from "../../api/axios";

//const COUNT_URL = process.env.API_URL + "/count"
const COUNT_URL = "https://securitypassword.cyclic.app/count"

export const getCount = async () => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token
    }
    const resp = await axios.post(COUNT_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    return resp.data
}

const Count = () => {
    const [counts, setCounts] = useState("")

    useEffect(() => {
        const resp = getCount().then(function(resp){
            setCounts(resp.msg)
            return resp
        })
    }
    ,[])
    return(
        <>
        <div>users: {counts.users}</div>
        <div>registers: {counts.registers}</div>
        <div>tokens: {counts.tokens}</div>
        </>
    )
}

export default Count