import React from 'react';
import image from '../../../../../images/Banner/womenbanner.jpg'
const WomenProductsBanner = () => {
    return (
        <div className="homebanner">
            <h2> Women's Catagories</h2>
            <img style={{ 'width': '100%' }} src={image} alt="" />
        </div>
    );
};

export default WomenProductsBanner;