import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';
import '../Password/css.css'

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
          <table className='tab'>
            <tr>
              <th>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                Security Password
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
      <Outlet />
    </>
  );
}

export default Navbar;
