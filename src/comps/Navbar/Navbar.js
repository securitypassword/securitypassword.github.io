import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //when clicked change state
  const handleClick = () => setClick(!click);
  //if the menu is closed, the button is not clicked
  const closeMobileMenu = () => setClick(false);

  //for settings of the button
  /*
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  */

  /*
  useEffect(() => {
    showButton();
  }, []);
*/

  //when the window gets resized
  //window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Security Password
          </Link>
          {/*<div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>*/}

          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            {/*<div className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Principal
              </Link>
            </div>*/}
            <div className='nav-item'>
              <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                Registrarse
              </Link>
            </div>

            {/*<div>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Iniciar Sesión
              </Link>
            </div>*/}
            {button && <Button buttonStyle='btn--outline'>INICIAR SESIÓN</Button>}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
