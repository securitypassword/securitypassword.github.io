import React from 'react';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';
import { Button } from '../Button/Button';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BotonCheck } from '../Botones/botones';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const REGISTER_URL = 'https://securitypassword.cyclic.app/register';

export const PassNote = () => {
    return(
        <>
        Longitud de 8 a 24 caracteres.<br />
        Debe incluir una mayúscula, una minúscula, un número y un carácter especial.<br />
        Caracteres especiales permitidos: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
        </>
    )
}

const RegisterForm = () => {
    const navigate = useNavigate();
        const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [accept, setAccept] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    //for validating text inputs
    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])



	const toggleAccept = () => {
		setAccept(!accept);
	}

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Datos invalidos");
            return;
        }
        try {
            const query = {
                name:user,
                email: email,
                password:pwd
            }
            const response = await axios.post(REGISTER_URL,
                JSON.stringify(query),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            
            if(response.data.data==="success"){
                setSuccess(true);
            }else{
                setErrMsg(response.data.msg)
            }
            //clear state and controlled inputs
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No responde el servidor');
            } else if (err.response?.status === 409) {
                setErrMsg('El nombre de usuario ya fue tomado');
            } else {
                setErrMsg('Fallo al registrar')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
                {success ? (
                    <center>  
                        <section>
                            <center>
                            <br/>    
                            <br/>
                                <h1>¡Se ha creado tu cuenta con exito!</h1>
                                <br/>
                                <br/>   
                                <p>
                                    {button && <Button buttonStyle='btn--outline'>INICIAR SESIÓN</Button>}
                                </p>
                            </center>
                        </section>
                    </center>

                ) : (
                    <center> 
                        <br/>    
                        <br/>
                        <br/>
                        <br/>              
                        <section>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <h1>Registro</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username">
                                    Usuario:
                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Longitud de 4 a 24 caracteres.<br />
                                    Debe empezar con una letra.<br />
                                    Letras, números y guiones están permitidos.
                                </p>

                                <label htmlFor="email">
                                    Email:
                                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                />
                                <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Email no válido
                                </p>

                                <label htmlFor="password">
                                    Contraseña Maestra:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    <PassNote></PassNote>
                                </p>


                                <label htmlFor="confirm_pwd">
                                    Confirmar Contraseña:
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />
                                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Las contraseñas deben coincidir.
                                </p>
                                <p>
                                    <br></br>
                                    Acepto los <a href={"https://securitypassword.github.io/#/legal"}> términos y condiciones</a>
                                    <BotonCheck seleccionado={accept} click={toggleAccept} />
                                </p>

                                <button disabled={!validName || !validPwd || !validMatch || !accept ? true : false}>Registrarse</button>
                            </form>
                            <p>
                                ¿Ya tienes cuenta?<br />
                                <span className="line">
                                    <Link to="/login">Inicia sesión</Link>
                                </span>
                            </p>
                        </section>
                    </center>
                )}
        </>
    )
}

export default RegisterForm
