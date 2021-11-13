import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
const UserPanel = () => {
    const { user } = useAuth();
    const { users } = useUser();

    return (

        < NavDropdown title="DashBoard" id="basic-nav-dropdown" >
            <NavDropdown.Item as={Link} to="/pay">Pay</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/userorders">My Orders</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/reviews">Review</NavDropdown.Item>
        </NavDropdown >
    );
};

export default UserPanel;