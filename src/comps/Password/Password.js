import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Password.css';

var id = ""

const Password = (parms) => {
    //console.log("Password parms",parms)
    //crear un elemento de contraseña a partir de parametros
    id = parms.id
    return(
        <>
        <br></br>
        <div className='passwordBox' > 
                <table className='tabla'>
                    <tr>
                        <th>Link</th>
                        <th>Nombre</th>
                        <th>Contraseña</th>
                    </tr>
                    </table>
            <table className='tabla'>
                
                <tr>
                    <button onClick={() => {window.location.href = parms.url}} className='passwordButtonGo'>Go</button>
                    <th>
                        {parms.name}
                    </th>
                    <th>
                        {parms.value}
                    </th>
                </tr>
            </table>
        </div>
        </>
    )
}
//<Button onClick={() => {navigate(parms.url)}} target="_blank" rel="noreferrer">{parms.name}</Button>
export default Password