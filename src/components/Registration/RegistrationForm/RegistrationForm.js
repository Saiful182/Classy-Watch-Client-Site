import React from 'react';
import { Form as Frm, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './registrationform.css'



const RegistrationForm = () => {
    return (
        <div className="registration-form-container">

            <Frm>
                <Frm.Group className="mb-3" controlId="FrmBasicEmail">
                    <Frm.Label>Type Your Name</Frm.Label>
                    <Frm.Control placeholder="Your Name" />
                    <Frm.Label>Email address</Frm.Label>
                    <Frm.Control type="email" placeholder="Enter email" />
                    <Frm.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Frm.Text>
                </Frm.Group>

                <Frm.Group className="mb-3" controlId="FrmBasicPassword">
                    <Frm.Label>Password</Frm.Label>
                    <Frm.Control type="password" placeholder="Password" />
                </Frm.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Frm>

            <p>Already Registred? Then <Link to="/login">Login</Link></p>
        </div>
    );
};

export default RegistrationForm;