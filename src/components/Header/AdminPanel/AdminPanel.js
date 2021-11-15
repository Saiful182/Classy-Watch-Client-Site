import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminPanel = () => {

    return (
        <>
            {
                < NavDropdown title="Admin Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/users">Users</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/addnewproduct">Add New Product</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/manageallorders">Manage All Orders</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/manageproducts">Manage Products</NavDropdown.Item>
                </NavDropdown>
            }
        </>

    );
};

export default AdminPanel;