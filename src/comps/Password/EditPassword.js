import React, { useEffect, useState } from 'react'
import NavbarPass from './NavbarPass'
import { useParams, useNavigate } from "react-router-dom";

import { getpass } from './GetPasswords';
import { from64 } from '../../api/sec';
import DelPassword from "./DelPassword"
import SecurityCheck from './SecurityCheck';
import axios from '../../api/axios';
import "./Password.css"
import Loading from '../Loaging';

//const EDIT_REG_URL = process.env.API_URL + "/editReg"
const EDIT_REG_URL = "https://securitypassword.cyclic.app/editReg"

//solicitar a la api la edicion de la contraseña
export const editPass = async (id, name, username, value, url, setError, navigate) => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token,
        id:id,
        name:name,
        username:username,
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
    //redireccionar al inicio en caso de exito
    if(resp.data.data=="success"){
        navigate("/passwords");
    }
    else{
        setError(resp.data.msg)
    }

}

//principal
const EditPassword = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState("")
    const [value, setValue] = useState("")
    const [url, setUrl] = useState("")
    const [error, setError] = useState("")
    let parms=useParams()
    

    const save = async () => {
        await editPass(parms.reg_id,name,username,value,url,setError, navigate)
    }
    //preparar la contraseña
    useEffect(()=>{
        setLoading(true)
        getpass().then(function(resp){
            let found = false
            for(var i in resp.data){
                const data = resp.data[i]
                if(data.id===parms.reg_id){
                    
                    setName(from64(data.name))
                    setUsername(from64(data.username))
                    setValue(from64(data.value))
                    setUrl(from64(data.url))
                    setLoading(true)
                    found = true
                }
            }
            if(!found){
                navigate("/passwords")
            }
        })
    }, [parms, setName, setValue, setUrl, setError])
    //formulario para edicion
    return(
        <>
        <NavbarPass></NavbarPass>
        <p>{error}</p>
        {loading && (<Loading></Loading>)}
        <br></br>
        <center>
            <br></br>
            <br></br>
            
            <br></br>
            <br></br>
            
            <br></br>
            
            <table className={{width: '100%'}}>
                <tr>
                    <th>
                        <input
                            type="text"
                            id="name"
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            placeholder='nombre de contraseña'
                        />
                    </th>
                    <th>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                            placeholder='nombre de usuario'
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
                            placeholder='value'
                        />        
                    </th>
                    <th>
                        <SecurityCheck text={value}></SecurityCheck>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <button className='boton12' onClick={save}>
                            Guardar
                            <i class="bi bi-save"></i>
                        </button>
                    </th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <DelPassword className='boton12' id={parms.reg_id}></DelPassword>
                    </th>
                    <th></th>
                </tr>
            </table>
        </center>
        </>
    )
}

export default EditPassword