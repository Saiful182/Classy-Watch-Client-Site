import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../../../../hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';

const HomeReviewsContainer = () => {
    const { reviews } = useReview();
    return (
        <div>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    reviews?.map(review => <HomeReview review={review} key={review._id}></HomeReview>)
                }
            </Row>




        </div>
    );
};

export default HomeReviewsContainer;