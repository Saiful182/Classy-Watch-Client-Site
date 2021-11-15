import React from 'react';
import { Col, Row } from 'react-bootstrap';
import InputRevew from '../InputReview/InputRevew';

import './reviews.css'

const Reviews = () => {

    return (
        <div className="review-container">
            <InputRevew></InputRevew>
        </div>
    );
};

export default Reviews;