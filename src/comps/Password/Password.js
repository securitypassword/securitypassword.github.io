import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Password.css';

var id = ""

const Password = (parms) => {
    //console.log("Password parms",parms)
    id = parms.id
    return(
        <>
        <br></br>
        <div className='passwordBox' > 
            <div>
            <button onClick={() => {window.location.replace = parms.url}} className='passwordButtonGo'>Go</button>
            </div>

            <div>
            <p>{parms.name}</p>
            <p>{parms.value}</p>
            </div>
        </div>
        </>
    )
}
//<Button onClick={() => {navigate(parms.url)}} target="_blank" rel="noreferrer">{parms.name}</Button>
export default Password