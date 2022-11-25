import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardBackground from './CardBackground';
import {
  NavLink
} from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
    <CardBackground></CardBackground>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Security Password</Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Sign up</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;