import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import MensProducts from '../MensProducts/MensProducts';
import WomensProducts from '../WomensProducts/WomensProducts';
import './productscontainer.css';
import menImage from '../../../images/Banner/men.jpg';
import womenImage from '../../../images/Banner/womens.jpg'
const ProductsContainer = () => {
    const { products } = useProducts();
    const mensProducts = products.filter(products => products.catagory === 'Men');
    const womensProducts = products.filter(products => products.catagory === 'Women');
    return (
        <div>
            <div>
                <div>
                    <img style={{ "width": "100%" }} src={menImage} alt="" />
                </div>
                <div className="containers">
                    <h3 >Mens Collections</h3>
                    {
                        products.length <= 0 ? < Spinner style={{ "margin": "0px auto" }} animation="border" variant="dark" /> : <Row xs={1} md={2} lg={3} className="g-4">
                            {mensProducts.map(product => < MensProducts product={product} key={product._id}></MensProducts>)}
                        </Row>
                    }


                </div>
                <div className="containers">
                    <div>
                        <img style={{ "width": "100%" }} src={womenImage} alt="" />
                    </div>
                    <h3 >Womens Collections</h3>{
                        products.length <= 0 ? < Spinner style={{ "margin": "0px auto" }} animation="border" variant="dark" /> : <Row xs={1} md={2} lg={3} className="g-4">
                            {womensProducts.map(product => < WomensProducts product={product} key={product._id}></WomensProducts>)}
                        </Row>
                    }


                </div>
            </div>
        </div>
    );
};

export default ProductsContainer;