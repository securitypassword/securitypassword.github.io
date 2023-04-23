import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Password.css';

var id = ""

const Password = (parms) => {
    const [passwordShown, setPasswordShown] = useState(false);
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
                
                <tr>
                    {parms.url != "" && (
                    <th className='celda'>
                        <button onClick={() => {window.location.href = parms.url}} className='passwordButtonGo'>Go</button>
                        <button onClick={() => {navigator.clipboard.writeText(parms.url)}}>Copiar URL</button>
                    </th>
                    )}
                    {parms.name != "" && (
                    <th className='celda'>
                        {parms.name}
                        <button onClick={() => {navigator.clipboard.writeText(parms.name)}}>Copiar</button>
                    </th>
                    )}
                    {parms.username != "" && (
                    <th className='celda'>
                        {parms.username}
                        <button onClick={() => {navigator.clipboard.writeText(parms.username)}}>Copiar</button>
                    </th>
                    )}
                    {passwordShown != "" && (
                    <th className='celda'>
                        {parms.value}
                    </th>
                    )}
                    <th className='celda'>
                        <button onClick={() => {setPasswordShown(!passwordShown)}}>Mostrar</button>
                        <button onClick={() => {navigator.clipboard.writeText(parms.value)}}>Copiar</button>
                    </th>
                </tr>
            </table>
        </div>
        </>
    )
}
//<Button onClick={() => {navigate(parms.url)}} target="_blank" rel="noreferrer">{parms.name}</Button>
export default Password