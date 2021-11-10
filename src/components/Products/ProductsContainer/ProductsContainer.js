import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import MensProducts from '../MensProducts/MensProducts';
import WomensProducts from '../WomensProducts/WomensProducts';
import './productscontainer.css'

const ProductsContainer = () => {
    const { products } = useProducts();
    const mensProducts = products.filter(products => products.catagory === 'Men');
    const womensProducts = products.filter(products => products.catagory === 'Women');
    return (
        <div>
            <div>
                <div className="containers">
                    <h3 >Mens Collections</h3>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {mensProducts.map(product => < MensProducts product={product} key={product._id}></MensProducts>)}
                    </Row>
                </div>
                <div className="containers">
                    <h3 >Womens Collections</h3>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {womensProducts.map(product => < WomensProducts product={product} key={product._id}></WomensProducts>)}
                    </Row>

                </div>
            </div>
        </div>
    );
};

export default ProductsContainer;