import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Login from './comps/Login';
import Pass from './comps/Pass';
import Register from './comps/Register';
import Navigation from './comps/Navigation';
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

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
    <p id="logId" hidden></p>
    </div>
    </Router>
  );
}

export default App;