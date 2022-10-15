import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Login from './comps/Login';
import NavPrincipal from './comps/NavPrincipal';
import TitlePass from './comps/TitlePass';
import Pass from './comps/Pass';
import Encoder from './comps/Encoder';
import Register from './comps/Register';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Navigation from './comps/Navigation';


function App() {
  return (
    <Router>
    <div className="App"><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
      
    <Routes>
    <Route path='/' element={<Navigation></Navigation>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/pass/:usu_id' element={<Pass  /> } />
    </Routes>
    </div>
    </Router>
  );
}

export default App;