import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './comps/Login';
import TitlePass from './comps/TitlePass';


function App() {
  return (
    <div className="App">
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
      <TitlePass></TitlePass>
      <Login></Login>
    </div>
  );
}

export default App;