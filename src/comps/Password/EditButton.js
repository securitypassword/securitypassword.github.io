import React from "react"
import { useNavigate } from 'react-router-dom';

const EditButton = (parms) => {
    const navigate = useNavigate();
    const EDIT_URL = "/editpassword/"+parms.id
    const act = () => {
        navigate(EDIT_URL);
    }
    //redireccion para modo de edicion de contraseña
    return(
        <>
        <button onClick={act}>Editar</button>
        </>
    )
}

export default EditButton