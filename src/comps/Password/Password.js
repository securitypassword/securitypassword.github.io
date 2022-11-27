import React from 'react';

var id = ""

const edit = () => {
    const EDIT_URL = "/editpassword/"+id
    window.location.href = EDIT_URL
}

const Password = (parms) => {
    console.log("Password parms",parms)
    id = parms.id
    return(
        <>
        <br></br>
        <a href={parms.url} target="_blank" rel="noreferrer">{parms.name}</a>
        <p>{parms.value}</p>
        <button onClick={edit}>Edit</button>
        </>
    )
}

export default Password