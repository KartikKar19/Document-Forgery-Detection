import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    
        <Navbar expand="lg" className="nav">
        <Container>
            <Navbar.Brand href="#home">Detectron</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}

export default NavbarComp;