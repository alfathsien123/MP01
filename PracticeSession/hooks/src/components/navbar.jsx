import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import './styles/navbar.css'

function NavigationBar () {
    // redux global state
    const user = useSelector(state => state.user)

    // initialise nativagion
    const navigation = useNavigate()

    // event handler
    const onButtonLogin = () => navigation('login')

    return (
        <Navbar expand="lg" className="nav-container">
            <Container fluid>
                <Navbar.Brand className="nav-brand" onClick={() => navigation('/')}>E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action2">Products</Nav.Link>
                </Nav>
                    { !user.UID ? 
                        <Button variant="outline-success" onClick={onButtonLogin}>Login</Button>
                        :
                        <Button variant="outline-success">Logout</Button>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar