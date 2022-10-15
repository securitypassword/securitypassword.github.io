import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardBackground from './CardBackground';
import {  Link} from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
    <CardBackground></CardBackground>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Security Password</Navbar.Brand>
          <Nav className="ml-auto">
            <Link to="/login" id="loginLink">Login</Link>
            <Link to="/register" id="regLink">Sign up</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;