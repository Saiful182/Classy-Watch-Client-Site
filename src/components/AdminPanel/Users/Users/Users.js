import React, { useState } from 'react';
import useUser from '../../../hooks/useUser';
import User from '../User/User';
import './users.css'


const Users = () => {
    const { users } = useUser();

    return (
        <div className="table-container">
            {
                users.map(user => <User user={user} key={user._id}></User>)
            }
        </div>
    );
};

export default Users;