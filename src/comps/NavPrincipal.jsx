import React, { Component} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
import NewPass from './NewPass';
import GetPass from './GetPass';
import Register from './/Register';

export default class NavPrincipal extends Component {
  render() {
    return (
      <div>
        <Register></Register>
        <Login></Login>
        <GetPass></GetPass>
        <NewPass></NewPass>
      </div>
    )
  }
}