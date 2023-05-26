import React from 'react';
import { useRef, useState, useEffect } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
//const DELETE_URL = process.env.API_URL + "/deleteUser"
const DELETE_URL = "https://securitypassword.cyclic.app/deleteUser"

//solicitar al api eliminacion de la cuenta
export const deleteUser = async (password, setError, navigate) => {
    let respuesta = false;
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
        respuesta = true;
        navigate("/")
    }
    else{
        setError(resp.data.msg);
    }
    return respuesta;
}



const DeleteUser = () => {
    const [paswword, setPassword] = useState('');
    
    const [error, setError] = useState('');

    const navigate = useNavigate()
    const action = async () => {
            await deleteUser(paswword, setError, navigate)
        };

    

    return (
        <>
            <p>{error}</p>
            <label>Escribe tu contraseña maestra para eliminar tu cuenta:</label>
            <br />
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