import React, { useEffect, useState } from "react";

var zxcvbn = require('zxcvbn');

//para medir la seguridad de una contraseña
const SecurityCheck = (parms) => {
    const [level, setLevel] = useState("")
    useEffect(() => {
        if(parms.text!=undefined && parms.text!=""){
            const resp = zxcvbn(parms.text)
            
            setLevel(resp.score)
        }else{
            setLevel(0)
        }
    })
    return(
        <>
        <p>Nivel de la contraseña: {level}</p>
        </>
    )
}

export default SecurityCheck