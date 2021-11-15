import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const HeaderNav = () => {

    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut();
    }
    return (
        <>

            <Navbar.Brand>Classy watch Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/products" >Products</Nav.Link>
                    <Nav.Link as={Link} to="/offers" >Offers</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus" >About Us</Nav.Link>

                </Nav>
                <Nav>

                    {
                        user.email && <Nav.Link > Hi! {user.displayName}</Nav.Link>
                    }
                    {
                        user.email ? <Nav.Link onClick={handleLogOut}  >Logout</Nav.Link> : <Nav.Link as={Link} to="/login" >Log in</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </>
    );
};

export default HeaderNav;