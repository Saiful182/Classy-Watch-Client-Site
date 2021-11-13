import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import useUser from '../../../hooks/useUser';
import './user.css';
const User = (props) => {
    const { users, setUsers } = useUser();
    const { _id, displayName, email, role } = props.user;
    const handleAdmin = (id) => {
        const selectedUser = users.filter(user => user._id === id)
        console.log(selectedUser);
        axios.put(`http://localhost:5000/users/${id}`, selectedUser)
            .then(res => {
                if (res.data?.acknowledged === true) {
                    alert(`${displayName} now an Admin`);
                }
            })
    }
    return (
        <div className="table-data">

            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{displayName}</td>
                        <td>{email}</td>
                        {
                            role ? <td>{role}</td> : <td>User</td>
                        }
                        <td>
                            {
                                !role && <button onClick={() => handleAdmin(_id)} className="btn btn-primary">Make Admin</button>
                            }
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default User;