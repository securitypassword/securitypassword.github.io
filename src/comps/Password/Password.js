import React, { useEffect } from 'react';
import { useState } from 'react';
import './Password.css';
import { isMobile } from '../Device';

const Password = (parms) => {
    const [passwordShown, setPasswordShown] = useState(false);
    
    //crear un elemento de contraseña a partir de parametros
    return(
        <>
        {isMobile() && (
            <div className='center2' > 
                
                    
                    {parms.name != "" && (
                    <>
                    <p className='p1'>Contraseña</p>

                        <br/>
                        <p className='p2'>{parms.name}:</p>
                        <br/>
                        <button className='boton_copy' onClick={() => {navigator.clipboard.writeText(parms.name)}}>
                            <i class="bi bi-files"></i>
                        </button>
                        </>
                    )}
                    
                <div>
                    {parms.url != "" && (
                    <>
                        <br></br>
                        {"       "}
                            <p className='p2'>link:</p> 
                        {"       "}
                        <button onClick={() => {
                            window.open(parms.url, '_blank', 'noreferrer')}
                            } className='passwordButtonGo'>
                                 <i class="bi bi-send"></i>
                        </button>
                        {"       "}
                        <button onClick={() => {navigator.clipboard.writeText(parms.url)}} className="boton_copy2">
                            <i class="bi bi-files"></i>
                            URL
                        </button>
                    </>
                    )}
                </div>

                                    
                
                    {parms.username != "" && (
                        <>
                        <p className='p2'>nombre de usuario:</p>
                        <br/>
                        <p className='p2'>{parms.username}</p>
                        <br></br>
                        <button className='boton_copy' onClick={() => {navigator.clipboard.writeText(parms.username)}}>
                        <i class="bi bi-files"></i>
                        </button>
                        </>
                    )}

                    <br/><br/>

                    <p className='p2'>contraseña:</p>
                    {parms.children != "" && (
                        <></>
                    )}
                        {passwordShown != "" ? (
                        <div className='celdaNotHide'>
                            {parms.value}
                        </div>
                        ) : (
                        <div className='celdaHide'>
                            {parms.value}
                        </div>
                        )}
                        <br></br>

                        <button onClick={() => {setPasswordShown(!passwordShown)}} className='hideShow'>{
                        passwordShown ? "Ocultar" : "Mostrar"}</button>
                        {"       "}
                        <button onClick={() => {navigator.clipboard.writeText(parms.value)}} className="boton_copy2">
                            <i class="bi bi-files"></i>
                        </button>
                    

                    {parms.children != "" && (
                        <>{parms.children}</>
                    )}
                
            
            </div>
        )}
        {!isMobile() && (
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
                               } className='passwordButtonGo'>
                                    <i class="bi bi-send"></i>
                               </button>
                           <button onClick={() => {navigator.clipboard.writeText(parms.url)}}>
                               <i class="bi bi-files"></i>
                               URL
                           </button>
                       </th>
                       )}
                       {parms.name != "" && (
                       <th className='celda'>
                           {parms.name}
                           <button onClick={() => {navigator.clipboard.writeText(parms.name)}}>
                               <i class="bi bi-files"></i>
                           </button>
                       </th>
                       )}
                       {parms.username != "" && (
                       <th className='celda'>
                           usuario
                           <br/>
                           {parms.username}
                           <button onClick={() => {navigator.clipboard.writeText(parms.username)}}>
                           <i class="bi bi-files"></i>
                           </button>
                       </th>
                       )}
                       <th className='celda'>
                           {passwordShown != "" ? (
                           <div className='celdaNotHide'>
                               {parms.value}
                           </div>
                           ) : (
                           <div className='celdaHide'>
                               {parms.value}
                           </div>
                           )}
                           <br></br>
                           <button onClick={() => {setPasswordShown(!passwordShown)}} className='hideShow'>{
                           passwordShown ? "Ocultar" : "Mostrar"}</button>

                           
                           <button onClick={() => {navigator.clipboard.writeText(parms.value)}}>
                               <i class="bi bi-files"></i>
                           </button>
                       </th>
                       {parms.children != "" && (
                       <th>{parms.children}</th>
                       )}
                   </tr>
                   
               </table>
                       </div> 
        )}
        </>
    )
}
//<Button onClick={() => {navigate(parms.url)}} target="_blank" rel="noreferrer">{parms.name}</Button>
export default Password