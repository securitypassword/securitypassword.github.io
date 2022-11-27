import React from 'react';

const Password = (parms) => {
    console.log("Password parms",parms)
    return(
        <>
        <br></br>
        <a href={parms.url} target="_blank">{parms.name}</a>
        <p>{parms.value}</p>
        </>
    )
}

export default Password