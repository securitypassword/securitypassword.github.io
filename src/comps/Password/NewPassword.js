import React, { useEffect } from 'react';
import Generator from "./Generator"
import NavbarPass from './NavbarPass';
import SecurityCheck from './SecurityCheck';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "../../api/axios"
import "./Password.css"
import { isMobile } from '../Device';
import ReactGridLayout from 'react-grid-layout';

//const NEW_REG_URL = process.env.API_URL + "/setReg"
const NEW_REG_URL = "https://securitypassword.cyclic.app/setReg"

//solicitud a la api de guardar la contraseña
export const savePass = async (name, username, value, url, setError, navigate) => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token,
        name:name,
        username:username,
        value:value,
        url:url
    }
    const resp = await axios.post(NEW_REG_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    if(resp.data.data == "success"){
        navigate("/passwords");
    }
    else{
        setError(resp.data.msg)
    }

}

//principal
const NewPassword = () => {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [value, setValue] = useState()
    const [url, setUrl] = useState()
    const [error, setError] = useState()
    const [mobile, setMobile] = useState()
    
    const save = async () => {
        await savePass(name,username,value,url,setError,navigate)
    }
    window.addEventListener('resize', () => {
        setMobile(isMobile())
    })
    useEffect(() => {
        setMobile(isMobile())
    })

    return(
        <>
        <NavbarPass></NavbarPass>

        <Generator value={value} setValue={setValue}></Generator>
        
        <center>
        <br></br>
        <p>{error}</p>

        <div className='center'>
                <div key="1">
                    <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        placeholder='nombre de contraseña'
                    />
                    </div>
                    <div key="2">
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                        placeholder='nombre de usuario'
                    />
                    </div>
                    <div key="3">
                    <input
                        type="text"
                        id="url"
                        autoComplete="off"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                        required
                        placeholder='url'
                    />
                    </div>
                    <div key="4">
                    <input
                        type="text"
                        id="value"
                        autoComplete="off"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        required
                        placeholder='contraseña'
                    />
                    <SecurityCheck text={value}></SecurityCheck>
                    </div>
            <br></br>
            <button className='boton12' onClick={save} title="Save">Save</button>
        </div>
        </center>
        
        </>
    )
}

export default NewPassword