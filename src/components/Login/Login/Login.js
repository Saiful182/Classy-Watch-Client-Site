import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from '../Form/Form';
import LoginImage from '../LoginImage/LoginImage';
import './login.css'


const Login = () => {
    return (
        <div className="logIn-container">

            <Row xs={1} md={2} lg={2}>

                <Col >
                    <Form></Form>
                </Col>
                <Col>
                    <LoginImage></LoginImage>
                </Col>
            </Row>

        </div>
    );
};

export default Login;