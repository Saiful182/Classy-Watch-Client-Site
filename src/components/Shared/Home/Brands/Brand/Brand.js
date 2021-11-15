import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './brand.css'
const Brand = (props) => {
    const { name, img } = props.brand
    return (
        <Col  >
            <Card className="bg-dark text-white">
                <Card.Img src={img} alt="Card image" />
                <Card.Title>{name}</Card.Title>
            </Card>
        </Col>
    );
};

export default Brand;