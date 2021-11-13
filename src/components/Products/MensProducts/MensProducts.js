import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

import './mensproducts.css';

import useAuth from '../../hooks/useAuth';

import { Link } from 'react-router-dom';


const MensProducts = (props) => {
    const { name, _id, price, description,
        brand,
        img } = props.product;

    const { user } = useAuth();

    return (
        <div>

            <Col>
                <Card>
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
                        user.email ? <Button as={Link} to={`/products/${_id}`} variant="primary">
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

export default MensProducts;