import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';
import '../Password/Password.css'
import './nav2.css'
import { isMobile } from '../Device';
import Drawer from '@mui/material/Drawer';

const Navbar=()=>{
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //when clicked change state
  const handleClick = () => setClick(!click);
  //if the menu is closed, the button is not clicked
  const closeMobileMenu = () => setClick(false);

  var r = isMobile();

  return (
    <>
      
    
    <div class="pure-container" data-effect="pure-effect-slide">
        <input type="checkbox" id="pure-toggle-left" class="pure-toggle" data-toggle="left"/>
        <label class="pure-toggle-label" for="pure-toggle-left" data-toggle-label="left">
            <span class="pure-toggle-icon"></span>
        </label>

        <div class="pure-drawer" data-position="left">
           <br/><br/><br/><br/><br/><br/>
           
          <table>
            <tr><Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              Security Password
              </Link>
            </tr>
            <tr> <Link to='/legal' className='nav-links' onClick={closeMobileMenu}>
            Legal
            </Link>
            </tr>
            <tr><Link to='/register' className='nav-links' onClick={closeMobileMenu}>
              Registrarse
            </Link>
            </tr>
            <tr>{button && <Button buttonStyle='btn--outline'>INICIAR SESIÓN</Button>}</tr>
           </table>
          
         
          
          
        </div>      
    </div>
   
    {/*
      <nav className='navbar'>
        <div className='navbar-container'>
          <table className='tab'>
            <tr>
              <th>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                Security Password
                </Link>
              </th>
              <th>
                <Link to='/legal' className='nav-links' onClick={closeMobileMenu}>
                Legal
                </Link>
              </th>
              <th>
                <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                Registrarse
                </Link>
              </th>
              <th>
                {button && <Button buttonStyle='btn--outline'>INICIAR SESIÓN</Button>}
              </th>
            </tr>
          </table>
        </div>
      </nav>
  <Outlet />*/}
    </>
  );
}

export default Navbar;
