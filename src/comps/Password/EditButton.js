import React from "react"
import { useNavigate } from 'react-router-dom';

const EditButton = (parms) => {
    const navigate = useNavigate();
    const EDIT_URL = "/editpassword/"+parms.id
    const action = () => {
        navigate(EDIT_URL);
    }
    //redireccion para modo de edicion de contraseña
    return(
        <>
        <button onClick={action}>
            <i class="bi bi-pencil-square"/>
        </button>
        </>
    )
}

export default EditButton