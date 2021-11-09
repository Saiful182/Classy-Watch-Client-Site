import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './header.css'

const Header = () => {
    return (
        <div>


            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand>Classy watch Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/products" >Products</Nav.Link>

                        </Nav>
                        <Nav>
                            <NavDropdown title="DashBoard" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/pay">Pay</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/myorders">My Orders action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/review">Review</NavDropdown.Item>

                            </NavDropdown>

                            <Nav.Link as={Link} to="/login" >Log in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;