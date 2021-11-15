import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaMapMarkedAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import './footeraddress.css'
const FooterAddress = () => {
    return (
        <Row sm={1} md={3}>
            <Col >
                <div className="review-text">
                    <FaMapMarkedAlt style={{ "width": "60px", "color": "white", "height": "20px", "margin": "0 5px" }} />
                    <p >House # 14/e, Road # 6, Dhanmondi, 2200,Dhaka,Bangladesh</p>
                </div>
            </Col>

            <Col >
                <div style={{ "marginTop": "10px" }} className="review-text">
                    <FaPhoneAlt style={{ "width": "60px", "color": "white", "height": "20px", "margin": "0 5px" }} />
                    <p >+880-2-8617208/9673512/9673920</p>
                </div>
            </Col>
            <Col >
                <div style={{ "marginTop": "10px" }} className="review-text">
                    <FaEnvelope style={{ "width": "60px", "color": "white", "height": "20px", "margin": "0 5px" }} />
                    <p >wma2qc15h6k@temporary-mail.net</p>
                </div>
            </Col>
        </Row>
    );
};

export default FooterAddress;