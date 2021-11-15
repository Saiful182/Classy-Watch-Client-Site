import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import './homereview.css'
const HomeReview = (props) => {
    const [ratings, setRatings] = useState(0)
    const { name, rating, comment } = props.review;
    const handleRating = value => {
        setRatings(value);
        // Some logic
    }
    const slicedComment = comment.slice(0, 150);
    return (
        <div>

            <Col>
                <Card className="review-card">
                    <Card.Title>{name}</Card.Title>
                    <Card.Body>
                        <Card.Text>{slicedComment}</Card.Text>

                        <p style={{ "color": "black" }}>Ratings:</p>
                        <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />

                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default HomeReview;