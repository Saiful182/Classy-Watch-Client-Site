import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import './HeaderSideBar.css'
import '../header.css';
import { FaList } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
import UserPanel from '../UserPanel/UserPanel';
import AdminPanel from '../AdminPanel/AdminPanel';
const HeaderSideBar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { users } = useUser();
    const { user } = useAuth();
    const admin = users.find(admin => admin.role === 'Admin');
    return (
        <>
            <>

                <FaList style={{ 'color': 'white', 'marginRight': '15px', 'cursor': 'pointer' }} onClick={handleShow} />

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>User Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    {
                        user.email ? <Offcanvas.Body>

                            {
                                admin?.email === user?.email ? <AdminPanel></AdminPanel>
                                    : <UserPanel></UserPanel>
                            }

                        </Offcanvas.Body> : <Offcanvas.Body>
                            <p>Please Log in to find more option</p>
                        </Offcanvas.Body>

                    }
                </Offcanvas>
            </>
        </>
    );
};

export default HeaderSideBar;


