import React from "react"
import { useNavigate } from 'react-router-dom';

const EditButton = (parms) => {
    const navigate = useNavigate();
    const EDIT_URL = "/editpassword"+parms.id
    const act = () => {
        navigate(EDIT_URL);
    }
    return(
        <>
        <button onClick={act}>Edit</button>
        </>
    )
}

export default EditButton