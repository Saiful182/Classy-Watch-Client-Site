import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../../../../hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';
import image from '../../../../../images/Banner/review.jpg'
import './reviewscontainer.css'

const HomeReviewsContainer = () => {
    const { reviews } = useReview();
    return (
        <div>
            <div className="review-heading">
                <img style={{ "width": "100%" }} src={image} alt="" />

                <h2>User's reviews </h2>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    reviews?.map(review => <HomeReview review={review} key={review._id}></HomeReview>)
                }
            </Row>




        </div>
    );
};

export default HomeReviewsContainer;