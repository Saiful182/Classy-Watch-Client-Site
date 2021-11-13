
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Product = (props) => {
    const { name, _id, price, description,
        brand,
        img } = props.products;

    const { user } = useAuth();
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='name-title'>Name:{name}  </Card.Title>
                    <Card.Title>Price: {price}$</Card.Title>
                    <Card.Title>Brand Name:{brand} </Card.Title>
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
    );
};

export default Product;