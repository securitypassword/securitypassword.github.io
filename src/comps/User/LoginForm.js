import React from 'react';
import { useRef, useState, useEffect } from 'react';
import useInput from "../../hooks/useInput"
import useToggle from "../../hooks/useToggle"
import axios from '../../api/axios';
import { Link } from "react-router-dom";
import { authquery } from '../Tokens/Auth';
import { useNavigate } from 'react-router-dom';
//const LOGIN_URL = process.env.API_URL + "/login"
const LOGIN_URL = "https://securitypassword.cyclic.app/login"

const LoginForm = () => {
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [user, resetUser, userAttribs] = useInput('user', '')
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [check, toggleCheck] = useToggle('persist', false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    //verificar el correcto inicio de sesion
    authquery().then(function(valid){
        if(valid){
            navigate("/passwords");
        }
    })
    //cuando se da click en el boton
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                name:user,
                password:pwd
            }
            //conectar con la api
            const response = await axios.post(LOGIN_URL,
                JSON.stringify(data),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            
            if(response.data.valid===false){
                setErrMsg(JSON.stringify(response.data.msg))
            }
            if(response.data.valid===true){
                window.sessionStorage.setItem("token",response.data.data)
                if(response.data.usu_rol===42){
                    navigate("/admin")
                }
                //window.location.href = "/login"
            }
            setPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No hay respuesta del servidor');
            } else if (err.response?.status === 400) {
                setErrMsg('Ingresar todos los parametros');
            } else if (err.response?.status === 401) {
                setErrMsg('Acceso no autorizado');
            } else {
                setErrMsg('Falla al iniciar sesión');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        <br/>    
        <br/>
        <br/>
        <br/>   
        <center>
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    {...userAttribs}
                    required
                />

                <label htmlFor="password">Contraseña Maestra:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Iniciar Sesión</button>
                
                {/*<div className="persistCheck">
                    <input
                        type="checkbox"
                        id="persist"
                        onChange={toggleCheck}
                        checked={check}
                    />
                    <label htmlFor="persist">Confiar en este dispositivo</label>
                </div>*/}
            </form>
            <p>
                <a href="https://securitypassword.github.io/#/changePassword">Olvidé mi contraseña</a>    
            </p>  
            <p>
                No tienes cuenta?<br />
                <span className="line">
                    <Link to="/register">Registrate aquí</Link>
                </span>
            </p> 
            </section>
        </center>
        </>
        )      
}

export default LoginForm