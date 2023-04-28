import React from 'react';
import { useRef, useState, useEffect } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
//const DELETE_URL = process.env.API_URL + "/deleteUser"
const DELETE_URL = "https://securitypassword.cyclic.app/deleteUser"

//solicitar al api eliminacion de la cuenta
export const deleteUser = async (password, setError) => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token,
        password:password
    }
    const resp = await axios.post(DELETE_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    //redireccionar al inicio en caso de exito
    if(resp.data.data=="success"){
        useNavigate("/")
    }
    else{
        setError(resp.data.msg)
    }
}



const DeleteUser = () => {
    const [paswword, setPassword] = useState('');
    
    const [error, setError] = useState('');

    const action = async () => {
        await deleteUser(paswword, setError);
    };

    return (
        <>
            <p>{error}</p>
            <label>Escribe tu contraseña maestra para eliminar tu cuenta:</label>
            <input
                type="text"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={paswword}
                placeholder = "Contraseña Maestra"
            />
            <button onClick={action}>Eliminar Cuenta</button>
        </>
        )      
}

export default DeleteUser;