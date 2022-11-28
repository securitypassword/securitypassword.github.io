import React from 'react';

const Logout = () => {
    window.sessionStorage.setItem("token", "")
    window.location.href = "/"
    return(<></>)
}

export default Logout