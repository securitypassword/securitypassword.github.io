import React from 'react';
import Home from './Home';
import Login from './User/Login';
import Passwords from './Password/Passwords';
import NoPage from './404';
import Logout from './User/Logout';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//va a administrar todos los componentes en base a las rutas
const Paths = () => {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route path='/passwords' element={<Passwords></Passwords>}></Route>
                        <Route path='/logout' element={<Logout></Logout>}></Route>
                        <Route path='*' element={<NoPage></NoPage>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
}

export default Paths