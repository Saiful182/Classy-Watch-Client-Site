import React from 'react';
import { Row } from 'react-bootstrap';
import image from '../../../images/Banner/offers.jpg'
import useProducts from '../../hooks/useProducts';

import OfferFrist from '../OfferFrist/OfferFrist';
import OfferSecond from '../OfferSecond/OfferSecond';

import './offers.css'
const Offers = () => {
    const { products } = useProducts();
    const fristFive = products.slice(0, 5);
    const secondFive = products.slice(15, 20);

    console.log(fristFive)
    return (
        <div>
            <div >

                <img style={{ "width": "100%" }} src={image} alt="" />


            </div>
            <div className="offers-containers">
                <h2> Get 40% off On this Products</h2>
                <Row sm={1} md={2} lg={3} className="g-4" >
                    {
                        fristFive.map(frist => <OfferFrist frist={frist} key={frist._id}></OfferFrist>)
                    }
                </Row>
            </div>
            <div className="offers-containers">
                <h2> Get 30% off On this Products</h2>
                <Row sm={1} md={2} lg={3} className="g-4">
                    {
                        secondFive.map(second => <OfferSecond second={second} key={second._id}></OfferSecond>)
                    }
                </Row>

            </div>

        </div>
    );
};

export default Offers;