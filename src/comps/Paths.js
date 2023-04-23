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
import Legal from './Legal';
import Bin from './Password/Bin';
import Settings from './User/Settings/Settings';
import Question from './User/Settings/Question';
import { Routes, Route , HashRouter } from "react-router-dom";

//va a administrar todos los componentes en base a las rutas
const Paths = () => {
        return (
            <>
                <HashRouter>
                    <Routes>
                        <Route exact path='/' element={<Home></Home>}></Route>
                        <Route path='/bin' element={<Bin></Bin>}></Route>{/*ya*/}
                        <Route path='/login' element={<Login></Login>}></Route>{/*ya*/}
                        <Route path='/logout' element={<Logout></Logout>}></Route>{/*ya*/}
                        <Route path='/settings' element={<Settings></Settings>}></Route>{/*ya*/}
                        <Route path='/register' element={<Register></Register>}></Route>{/*ya*/}
                        <Route path='/passwords' element={<Passwords></Passwords>}></Route>{/*ya*/}
                        <Route path='/newpassword' element={<NewPassword></NewPassword>}></Route>{/*ya*/}
                        <Route path='/changePassword/:token' element={<Question></Question>}></Route>
                        <Route path='/editpassword/:reg_id' element={<EditPassword></EditPassword>}></Route>
                        <Route path='/editpassword' element={<EditPassword></EditPassword>}></Route>
                        <Route path='/admin' element={<Admin></Admin>}></Route>{/**/}
                        <Route path='*' element={<NoPage></NoPage>}></Route>{/*ya*/}
                    </Routes>
                </HashRouter>
            </>
        )
}

export default Paths