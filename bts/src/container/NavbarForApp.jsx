import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavbarForApp.css';

function NavbarForApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand-animated">thre@dify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/category" className="custom-nav-link">Category</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className="custom-nav-link">ContactUs</Nav.Link>
            <Nav.Link as={Link} to="/loginSignUp" className="custom-nav-link">Login/SignUp</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarForApp;
