import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
const AdminPanel = () => {
    const { user } = useAuth();
    const { users } = useUser();
    const adminUser = users.filter(user => user.role === 'Admin');
    console.log(adminUser);
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