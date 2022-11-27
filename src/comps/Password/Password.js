import React from 'react';

var id = ""

const Password = (parms) => {
    console.log("Password parms",parms)
    id = parms.id
    return(
        <>
        <br></br>
        <a href={parms.url} target="_blank" rel="noreferrer">{parms.name}</a>
        <p>{parms.value}</p>
        </>
    )
}

export default Password