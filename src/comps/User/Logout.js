import React, {useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    window.sessionStorage.setItem("token", "")
    useEffect(() => {
        navigate("/login");
    })
    return(<></>)
}

export default Logout