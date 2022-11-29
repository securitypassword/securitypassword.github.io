import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { useParams } from "react-router-dom";


//const CHANGE_URL = process.env.API_URL + "/forgorPasswordToken"
const CHANGE_URL = "https://securitypassword.cyclic.app/forgorPasswordToken"

const Question = () => {
    const [pwd, setPwd] = useState("")
    let parms=useParams()

    useEffect(() => {
        console.log(parms.token)
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
        console.log(response)
    }
    return(
        <>

            <label htmlFor="password">Contraseña nueva:</label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
            <button onClick={setPass} >Set Pass</button>
        </>
    )
}

export default Question