import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import useAuth from '../hooks/useAuth';

import './header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut();
    }
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
                            {
                                user.email && <NavDropdown title="DashBoard" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/pay">Pay</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/userorders">My Orders</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/reviews">Review</NavDropdown.Item>

                                </NavDropdown>

                            }
                            <NavDropdown title="Admin Panel" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/manageallorders">Manage All Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/users">Users</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addnewproduct">Add Product</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/reviews"></NavDropdown.Item>
                            </NavDropdown>

                            {
                                user.email && <Nav.Link > Hi! {user.displayName}</Nav.Link>
                            }
                            {
                                user.email ? <Nav.Link onClick={handleLogOut}  >Logout</Nav.Link> : <Nav.Link as={Link} to="/login" >Log in</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;