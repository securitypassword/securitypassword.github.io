import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        const response = await axios.post(LOGIN_URL,
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
        </>
    )
}

export default Question