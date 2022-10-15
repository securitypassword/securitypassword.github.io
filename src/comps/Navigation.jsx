import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardBackground from './CardBackground';

function ColorSchemesExample() {
  return (
    <>
    <CardBackground></CardBackground>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Security Password</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link to="/login">Login</Nav.Link>
            <Nav.Link to="/register">Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;