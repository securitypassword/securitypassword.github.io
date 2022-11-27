import React from 'react';
import Home from './Home';
import Login from './User/Login';
import Passwords from './Password/Passwords';
import NoPage from './404';
import Logout from './User/Logout';
import NewPassword from './Password/NewPassword';
import Admin from './Admin/Admin';
import Register from './User/Register';
import EditPassword from './Password/EditPassword';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//va a administrar todos los componentes en base a las rutas
const Paths = () => {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route path='/logout' element={<Logout></Logout>}></Route>
                        <Route path='/register' element={<Register></Register>}></Route>
                        <Route path='/passwords' element={<Passwords></Passwords>}></Route>
                        <Route path='/newpassword' element={<NewPassword></NewPassword>}></Route>
                        <Route path='/editpassword/:reg_id' element={<EditPassword></EditPassword>}></Route>
                        <Route path='/editpassword' element={<EditPassword></EditPassword>}></Route>
                        <Route path='/admin' element={<Admin></Admin>}></Route>
                        <Route path='*' element={<NoPage></NoPage>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
}

export default Paths