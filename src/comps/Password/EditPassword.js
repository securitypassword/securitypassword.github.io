import React, { useEffect, useState } from 'react'
import Auth from '../Tokens/Auth';
import NavbarPass from './NavbarPass'
import { useParams, useNavigate } from "react-router-dom";
import { getpass } from './GetPasswords';
import { from64 } from '../../api/sec';
import DelPassword from "./DelPassword"
import SecurityCheck from './SecurityCheck';
import axios from '../../api/axios';

//const EDIT_REG_URL = process.env.API_URL + "/editReg"
const EDIT_REG_URL = "https://securitypassword.cyclic.app/editReg"

export const editPass = async (id, name, value, url, setError, navigate) => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token,
        id:id,
        name:name,
        value:value,
        url:url
    }
    const resp = await axios.post(EDIT_REG_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    console.log("resp",resp)
    if(resp.data.data==="error"){
        setError(resp.data.msg)
    }
    if(resp.data.data=="success"){
        setError(resp.data.data)
        navigate("/");
    }

}

const EditPassword = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const [url, setUrl] = useState("")
    const [error, setError] = useState("")
    let parms=useParams()
    console.log(parms)

    const save = async () => {
        await editPass(parms.reg_id,name,value,url,setError, navigate)
    }

    useEffect(()=>{
        setError("Loading...")
        getpass().then(function(resp){
            let found = false
            for(var i in resp.data){
                const data = resp.data[i]
                if(data.id===parms.reg_id){
                    console.log(data)
                    setName(from64(data.name))
                    setValue(from64(data.value))
                    setUrl(from64(data.url))
                    setError("")
                    found = true
                }
            }
            if(!found){
                navigate("/passwords")
            }
        })
    }, [parms, setName, setValue, setUrl, setError])
    return(
        <>
        <Auth></Auth>
        <NavbarPass></NavbarPass>
        <p>{error}</p>
        <br></br>
        <input
            type="text"
            id="name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            placeholder='nombre'
        />
        <br></br>
        <br></br>
        <input
            type="text"
            id="value"
            autoComplete="off"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            required
            placeholder='value'
        />
        <br></br>
        <SecurityCheck text={value}></SecurityCheck>
        <br></br>
        <br></br>
        <input
            type="text"
            id="url"
            autoComplete="off"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            required
            placeholder='url'
        />
        <br></br>
        <button onClick={save}>Save Edit</button>
        <DelPassword id={parms.reg_id}></DelPassword>
        </>
    )
}

export default EditPassword