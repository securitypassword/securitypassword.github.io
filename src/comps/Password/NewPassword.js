import React from 'react';
import Generator from "./Generator"
import Auth from '../Tokens/Auth';
import NavbarPass from './NavbarPass';
import SecurityCheck from './SecurityCheck';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "../../api/axios"
import "./css.css"

//const NEW_REG_URL = process.env.API_URL + "/setReg"
const NEW_REG_URL = "https://securitypassword.cyclic.app/setReg"

//solicitud a la api de guardar la contraseña
export const savePass = async (name, value, url, setError, navigate) => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token,
        name:name,
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
    console.log("resp")
    setError(resp.data.msg)
    if(resp.data.data == "success"){
        navigate("/bin");
    }

}

//principal
const NewPassword = () => {
    const navigate = useNavigate();
    const [name, setName] = useState()
    const [value, setValue] = useState()
    const [url, setUrl] = useState()
    const [error, setError] = useState()
    
    const save = async () => {
        await savePass(name,value,url,setError,navigate)
    }

    return(
        <>
        <Auth></Auth>
        <NavbarPass></NavbarPass>

        <Generator value={value} setValue={setValue}></Generator>
        
        <br></br>
        <p>{error}</p>

        <div className='center'>
            <table className='tab'>
                <tr>
                    <th>
                        <input
                            type="text"
                            id="name"
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            placeholder='nombre'
                        />
                    </th>
                    <th>
                        <input
                            type="text"
                            id="url"
                            autoComplete="off"
                            onChange={(e) => setUrl(e.target.value)}
                            value={url}
                            required
                            placeholder='url'
                        />
                    </th>
                </tr>
                <tr>
                    <th>
                        <input
                            type="text"
                            id="value"
                            autoComplete="off"
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                            required
                            placeholder='contraseña'
                        />
                    </th>
                    <th>
                    <SecurityCheck text={value}></SecurityCheck>
                    </th>
                </tr>
            </table>
            
            <br></br>
            <button className='boton12' onClick={save} title="Save">Save</button>
        </div>
        
        </>
    )
}

export default NewPassword