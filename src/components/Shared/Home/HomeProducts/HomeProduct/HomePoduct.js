import React from 'react';
import { Button, Row } from 'react-bootstrap';
import useProducts from '../../../../hooks/useProducts';
import Product from '../Product/Product';
import './homeproduct.css';
import {
    Link
} from "react-router-dom";
const HomeProduct = () => {
    const { products } = useProducts();
    const mensProducts = products.filter(products => products.catagory === 'Men');

    const filtredProducts = mensProducts.slice(0, 3);

    return (
        <div className="product-container">

            <Row xs={1} md={2} lg={3} className="g-4">

                {
                    filtredProducts.map(products => <Product products={products} key={products._id}></Product>)
                }
            </Row>
            <div className="link-button">
                <Link to="/products"> See More</Link>
            </div>
        </div>
    );
};

export default HomeProduct;