import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import ManageProduct from '../ManageProduct/ManageProduct';
import './manageproductcontainer.css'
const ManageProducts = () => {
    const { products } = useProducts();

    return (
        <div className="manage-products-container">
            <h2>Total Products: {products.length}</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(product => <ManageProduct product={product} key={product._id}></ManageProduct>)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;