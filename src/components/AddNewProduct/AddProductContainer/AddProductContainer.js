import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import AddProductImage from '../AddProductImage/AddProductImage';
import './addproductcontainer.css'

const AddProductContainer = () => {
    return (
        <div>
            <Row xs={1} md={2}>
                <Col><AddProductImage></AddProductImage></Col>
                <Col><AddNewProduct></AddNewProduct></Col>

            </Row>
        </div>
    );
};

export default AddProductContainer;