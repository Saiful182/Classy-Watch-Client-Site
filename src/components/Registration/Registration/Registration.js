import React from 'react';
import { Col, Row } from 'react-bootstrap';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import RegistrationImage from '../RegistrationImage/RegistrationImage';
import './registration.css'

const Registration = () => {
    return (
        <div>

            <Row xs={1} md={2} lg={2}  >
                <Col><RegistrationForm></RegistrationForm></Col>
                <Col><RegistrationImage></RegistrationImage></Col>
            </Row>
        </div>
    );
};

export default Registration;