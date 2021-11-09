import React from 'react';
import image from '../../../images/others/reg.jpg'
import './registrationimage.css'

const RegistrationImage = () => {
    return (
        <div className="registration-image">
            <img src={image} alt="" />
        </div>
    );
};

export default RegistrationImage;