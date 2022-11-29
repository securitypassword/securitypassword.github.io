import React from 'react';

const Logout = () => {
    window.sessionStorage.setItem("token", "")
    window.location.href = "/login"
    return(<></>)
}

export default Logout