import React, { useEffect } from 'react';
import { useState } from 'react';
import './Password.css';

const Password = (parms) => {
    const [passwordShown, setPasswordShown] = useState(false);
    
    //crear un elemento de contraseña a partir de parametros
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
                    {parms.children != "" && (
                    <th></th>
                    )}
                </tr>
                
                <tr>
                    {parms.url != "" && (
                    <th className='celda'>
                        <button onClick={() => {
                            window.open(parms.url, '_blank', 'noreferrer')}
                            } className='passwordButtonGo'>Go</button>
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
                        <button onClick={() => {setPasswordShown(!passwordShown)}}>{
                        passwordShown ? "Ocultar" : "Mostrar"}</button>
                        <button onClick={() => {navigator.clipboard.writeText(parms.value)}}>Copiar</button>
                    </th>
                    {parms.children != "" && (
                    <th>{parms.children}</th>
                    )}
                </tr>
                
            </table>
        </div>
        </>
    )
}
//<Button onClick={() => {navigate(parms.url)}} target="_blank" rel="noreferrer">{parms.name}</Button>
export default Password