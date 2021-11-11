import React from 'react';
import image from '../../../../images/others/newproduct.png'
import './addproductimage.css';
const AddProductImage = () => {
    return (
        <div className="image-container">
            <img src={image} alt="" />
        </div>
    );
};

export default AddProductImage;