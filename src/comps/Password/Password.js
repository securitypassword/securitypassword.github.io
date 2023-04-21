import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Password.css';

var id = ""

const Password = (parms) => {
    console.log("Password parms",parms)
    //crear un elemento de contraseña a partir de parametros
    id = parms.id
    return(
        <>
        <br></br>
        <div className='passwordBox' > 
                <table className='tabla'>
                    <tr>
                        {parms.url != "" && (
                        <th>Link</th>
                        )}
                        {parms.name != "" && (
                        <th>Nombre de contraseña</th>
                        )}
                        {parms.username != "" && (
                        <th>Nombre de usuario</th>
                        )}
                        <th>Contraseña</th>
                    </tr>
                    </table>
            <table className='tabla'>
                
                <tr>
                    {parms.url != "" && (
                    <th className='celda'>
                        <button onClick={() => {window.location.href = parms.url}} className='passwordButtonGo'>Go</button>
                    </th>
                    )}
                    {parms.name != "" && (
                    <th className='celda'>
                        {parms.name}
                    </th>
                    )}
                    {parms.username != "" && (
                    <th className='celda'>
                        {parms.username}
                    </th>
                    )}
                    <th className='celda'>
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