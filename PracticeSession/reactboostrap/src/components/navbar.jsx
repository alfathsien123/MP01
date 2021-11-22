import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">PS React</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Item>
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/products">Products</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/register">Register</Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
