
import React from 'react';
import { Form as Frm, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './form.css'

const Form = () => {
    return (
        <div className="form-container">

            <Frm>
                <Frm.Group className="mb-3" controlId="FrmBasicEmail">
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
            <h4>Or login With <Button variant="primary" type="submit">
                Google
            </Button></h4>

            <p>New to this site? Please <Link to="/registration">Register</Link></p>
        </div>
    );
};

export default Form;