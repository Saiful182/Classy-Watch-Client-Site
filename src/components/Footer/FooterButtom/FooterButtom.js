import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/Classy Watch Store-logos.jpeg';
import './footerbottom.css';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";
const FooterButtom = () => {
    return (
        <div className="footer-vuttom-container">
            <Row sm={1} md={2}>
                <Col className="logo-container" md={4}>
                    <div className="logo-text">
                        <img style={{ "height": "200px", "width": "200px" }} src={logo} alt="" />
                        <h3 style={{ "margin": "10px" }}>Classy Watch Store</h3>

                        <p style={{ "color": "black" }}>Follow us on</p>
                        <div className="logo-icon">
                            <FaFacebookSquare style={{ "width": "40px", "color": "blue", "height": "50px", "margin": "0 5px" }} />
                            <FaLinkedin style={{ "width": "40px", "color": "blue", "height": "50px", "margin": "0 5px" }} />
                            <FaYoutube style={{ "width": "40px", "color": "red", "height": "50px", "margin": "0 5px" }} />
                            <FaInstagramSquare style={{ "width": "40px", "color": "#E82F75", "height": "50px", "margin": "0 5px" }} />
                        </div>
                    </div>
                </Col>

                <Col md={8}>
                    <Row sm={2} lg={4}>
                        <Col>
                            <div className="company-info">
                                <h3>Company Info</h3>
                                <p>About Us</p>
                                <p>Authenticity</p>
                                <p>Privacy Policy</p>
                                <p>Customer Reviews</p>
                                <p>Testimonials</p>
                                <p>Watch Guide</p>
                                <p>Affiliate Program</p>
                            </div>
                        </Col>
                        <Col>

                            <div>
                                <h3>Help Center</h3>
                                <p>Payment Options</p>
                                <p>Product Warranty</p>
                                <p>Pricing and Availability</p>
                                <p>Returns/Exchanges</p>
                                <p>Shipping Information</p>
                                <p>FAQ</p>
                                <p>Item Description</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h3>Contact Us</h3>
                                <p>Customer Service</p>
                                <p>Update Your Email</p>
                                <p>Trade In Your Watch</p>
                                <p>Sell us Your Rolex</p>
                                <p>Sell us Your Watch</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h3>My account</h3>
                                <p>Manage Account</p>
                                <p>View Cart</p>
                                <p>My Wishlist</p>
                                <p>Track Order Status</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default FooterButtom;