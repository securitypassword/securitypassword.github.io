import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

//const CHANGE_URL = process.env.API_URL + "/forgorPasswordToken"
const CHANGE_URL = "https://securitypassword.cyclic.app/forgorPassword"

const ChangePass = () => {
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    let parms=useParams()

    useEffect(() => {
        
    },[parms])
    const email = async () => {
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
        if(response.data.data == "error"){
            setError(response.data.msg)
        }
        else{
            navigate("/")
        }
        
    }
    return(
        <>
        <Navbar></Navbar>
        <center>
        <p>
            Se le enviará un email para continuar con el cambio de contraseña
        </p>
        <p>{error}</p>
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
            <button onClick={email} >Enviar email</button>
            </center>
        </>
    )
}

export default ChangePass