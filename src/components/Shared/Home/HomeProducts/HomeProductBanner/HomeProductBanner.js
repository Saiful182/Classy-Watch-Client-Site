import React from 'react';
import image from '../../../../../images/Banner/menbanner.jpg';
import './homeproductbanner.css'

const HomeProductBanner = () => {
    return (
        <div className="homebanner">
            <h2> Men's Catagories</h2>
            <img style={{ 'width': '100%' }} src={image} alt="" />
        </div>
    );
};

export default HomeProductBanner;