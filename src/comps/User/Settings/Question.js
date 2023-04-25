import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


//const CHANGE_URL = process.env.API_URL + "/forgorPasswordToken"
const CHANGE_URL = "https://securitypassword.cyclic.app/forgorPasswordToken"

const Question = () => {
    const [pwd, setPwd] = useState("")
    const [error, setError] = useState("")
    let parms=useParams()

    useEffect(() => {
        
    },[parms])
    const setPass = async () => {
        const data = {
            token: parms.token,
            password:pwd
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
            setError("Correo enviado")
        }
        
    }
    return(
        <>
        <Navbar></Navbar>
        {error}
        <br></br>
            <label htmlFor="password">Contraseña nueva:</label>
            <br></br>
            <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
            <br></br>
            <button onClick={setPass} >Set Pass</button>
        </>
    )
}

export default Question