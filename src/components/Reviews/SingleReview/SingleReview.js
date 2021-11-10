import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './singlereview.css'
import { Rating } from 'react-simple-star-rating'
import './singlereview.css'
const SingleReview = (props) => {
    const [ratings, setRatings] = useState(0)
    const { name, rating, comment } = props.review;
    const handleRating = value => {
        setRatings(value);
        // Some logic
    }
    return (
        <Col>
            <Card className="review-card">
                <Card.Title>{name}</Card.Title>
                <Card.Body>
                    <Card.Text>'{comment}'</Card.Text>

                    <p>Ratings:</p> <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />

                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleReview;