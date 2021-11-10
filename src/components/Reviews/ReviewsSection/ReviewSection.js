import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';


const ReviewSection = () => {
    const { reviews } = useReview();
    console.log(reviews?.length)

    return (
        <Row xs={1} md={2} className="g-4">
            {
                reviews?.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
            }
        </Row>
    );
};

export default ReviewSection;