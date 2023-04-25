import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


//const CHANGE_URL = process.env.API_URL + "/forgorPasswordToken"
const CHANGE_URL = "https://securitypassword.cyclic.app/forgorPasswordToken"

const ChangePass = () => {
    const [name, setName] = useState("")
    let parms=useParams()

    useEffect(() => {
        
    },[parms])
    const setPass = async () => {
        const data = {
            token: parms.token,
            name:name
        }
        const response = await axios.post(CHANGE_URL,
            JSON.stringify(data),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        
    }
    return(
        <>
        <Navbar></Navbar>
        <p>
            Se le enviará un email para continuar con el cambio de contraseña
        </p>
            <label htmlFor="name">Nombre:</label>
            <br></br>
            <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />
            <br></br>
            <button onClick={setName} >Enviar email</button>
        </>
    )
}

export default ChangePass