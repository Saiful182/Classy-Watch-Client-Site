import React, { useState } from 'react';
import { Form as Frm, Button, Spinner, Alert } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './registrationform.css'

const RegistrationForm = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory()
    const { user, registration, setError, error, isLoading } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.type;
        const value = e.target.value;
        const newLogInData = { ...loginData }
        newLogInData[field] = value;
        setLoginData(newLogInData);
    }
    const handleRegistration = e => {
        if (loginData?.password?.length < 6) {
            setError('Password Should be more then 6 charecter');
            return;
        }
        registration(loginData.text, loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div className="registration-form-container">

            {isLoading &&
                < Spinner animation="border" variant="dark" />
            }
            {
                !isLoading && <Frm onSubmit={handleRegistration}>
                    <Frm.Group className="mb-3" controlId="FrmBasicEmail">
                        <Frm.Label>Type Your Name</Frm.Label>
                        <Frm.Control onBlur={handleOnBlur} type="text" placeholder="Enter your Name" />
                        <Frm.Label>Email address</Frm.Label>
                        <Frm.Control onBlur={handleOnBlur} type="email" placeholder="Enter email" />

                    </Frm.Group>

                    <Frm.Group className="mb-3" controlId="FrmBasicPassword">
                        <Frm.Label>Password</Frm.Label>
                        <Frm.Control onBlur={handleOnBlur} type="password" placeholder="Password" />
                    </Frm.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Frm>
            }
            {
                user?.email && <Alert variant={'success'}>
                    Registration SuccessFull!
                </Alert>
            }
            <p style={{ 'color': 'red' }} >{error}</p>
            <p>Already Registred? Then <Link to="/login">Login</Link></p>
        </div>
    );
};

export default RegistrationForm;