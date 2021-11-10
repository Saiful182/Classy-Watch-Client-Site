import React from 'react';
import { Form as Frm, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './registrationform.css'

const RegistrationForm = () => {
    const location = useLocation();
    const history = useHistory()
    const { setName, setPassword, setEmail, registration, password, setError, error, isLoading } = useAuth();
    const handleName = e => {
        const name = e.target.value;
        setName(name);
    }
    const handleEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handlePassword = e => {
        const password = e.target.value;
        setPassword(password);
    }
    const handleRegistration = e => {
        if (password.length < 6) {
            setError('Password Should be more then 6 charecter');
            return;
        }
        e.preventDefault();
        registration(location, history);
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
                        <Frm.Control onBlur={handleName} type="text" placeholder="Enter your Name" />
                        <Frm.Label>Email address</Frm.Label>
                        <Frm.Control onBlur={handleEmail} type="email" placeholder="Enter email" />

                    </Frm.Group>

                    <Frm.Group className="mb-3" controlId="FrmBasicPassword">
                        <Frm.Label>Password</Frm.Label>
                        <Frm.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Frm.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>


                </Frm>
            }

            <p>{error}</p>
            <p>Already Registred? Then <Link to="/login">Login</Link></p>
        </div>
    );
};

export default RegistrationForm;