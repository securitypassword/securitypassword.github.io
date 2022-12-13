import React from "react";
import Home from "./comps/Home";
import Login from "./comps/User/Login";
import Passwords from "./comps/Password/Passwords";
import NoPage from "./comps/404";
import Logout from "./comps/User/Logout";
import NewPassword from "./comps/Password/NewPassword";
import Admin from "./comps/Admin/Admin";
import Register from "./comps/User/Register";
import EditPassword from "./comps/Password/EditPassword";
import Bin from "./comps/Password/Bin";
import AutoDel from "./comps/User/Settings/AutoDel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/bin" element={<Bin></Bin>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/logout" element={<Logout></Logout>}></Route>
                    <Route
                        path="/autodel"
                        element={<AutoDel></AutoDel>}
                    ></Route>
                    <Route
                        path="/register"
                        element={<Register></Register>}
                    ></Route>
                    <Route
                        path="/passwords"
                        element={<Passwords></Passwords>}
                    ></Route>
                    <Route
                        path="/newpassword"
                        element={<NewPassword></NewPassword>}
                    ></Route>
                    <Route
                        path="/editpassword/:reg_id"
                        element={<EditPassword></EditPassword>}
                    ></Route>
                    <Route
                        path="/editpassword"
                        element={<EditPassword></EditPassword>}
                    ></Route>
                    <Route path="/admin" element={<Admin></Admin>}></Route>
                    <Route path="*" element={<NoPage></NoPage>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
