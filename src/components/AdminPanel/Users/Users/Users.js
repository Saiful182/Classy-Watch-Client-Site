import React from 'react';
import { Spinner } from 'react-bootstrap';
import useUser from '../../../hooks/useUser';
import User from '../User/User';
import './users.css'


const Users = () => {
    const { users } = useUser();
    return (
        <>
            {
                users?.length <= 0 ? < Spinner style={{ "textAlign": "center" }} animation="border" variant="dark" /> : < div className="table-container">
                    {
                        users.map(user => <User user={user} key={user._id}></User>)
                    }

                </div>
            }


        </>
    );
};

export default Users;