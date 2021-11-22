import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">News APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/headlines">Headlines</Nav.Link>
              <NavDropdown title="Countries" id="basic-nav-dropdown">
                <NavDropdown.Item href="/america">Amerika</NavDropdown.Item>
                <NavDropdown.Item href="/korea">Korea</NavDropdown.Item>
                <NavDropdown.Item href="/indonesia">Indonesia</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
