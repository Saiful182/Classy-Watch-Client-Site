import React from 'react';
import { Col, Row } from 'react-bootstrap';
import InputRevew from '../InputReview/InputRevew';
import ReviewSection from '../ReviewsSection/ReviewSection';
import './reviews.css'

const Reviews = () => {

    return (
        <div className="review-container">
            <Row >
                <Col sm={4}>
                    <InputRevew></InputRevew>
                </Col>
                <Col sm={8}>

                    <ReviewSection></ReviewSection>

                </Col>

            </Row>
        </div>
    );
};

export default Reviews;