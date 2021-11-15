import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

import { Link } from 'react-router-dom';
import './offerfrist.css'
const OfferFrist = (props) => {
    const { name, _id, price, description,
        brand,
        img } = props.frist;

    const { user } = useAuth();

    return (

        <div className="card-offers">

            <Col>
                <Card>
                    <div className="Offer-tag"> <p>40% off</p></div>
                    <Card.Img variant="top" src={img} />

                    <Card.Body>
                        <Card.Title className='name-title'>Name: {name}</Card.Title>
                        <Card.Title>Price: {price}$</Card.Title>
                        <Card.Title>Brand Name:  {brand}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 150)}
                        </Card.Text>
                    </Card.Body>
                    {
                        user.email ? <Button as={Link} to={`/product/${_id}`} variant="primary">
                            Buy Now
                        </Button> : <Button as={Link} to='/login' variant="primary" >
                            Buy Now
                        </Button>
                    }
                </Card>
            </Col>
        </div >
    );
};

export default OfferFrist;