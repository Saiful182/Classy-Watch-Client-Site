import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import WomenProduct from '../WomenProduct/WomenProduct';

const WomensProducts = () => {
    const { products } = useProducts();
    const womensProducts = products.filter(products => products.catagory === 'Women');

    const filtredProducts = womensProducts.slice(0, 3);

    return (

        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    filtredProducts.map(product => <WomenProduct product={product} key={product._id}></WomenProduct>)
                }
            </Row>
            <div className="link-button">

                <Link to="/products"> See More</Link>
            </div>
        </div>
    );
};

export default WomensProducts;