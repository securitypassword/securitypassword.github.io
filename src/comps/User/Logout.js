import React, {useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    //vaciar el token de autentificacion
    window.sessionStorage.setItem("token", "")
    useEffect(() => {
        navigate("/login");
    })
    return(<></>)
}

export default Logout