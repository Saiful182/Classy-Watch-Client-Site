import React from 'react';
import logimage from '../../../images/others/login.jpg'
import './loginimage.css'

const LoginImage = () => {
    return (
        <div className="login-image">
            <img src={logimage} alt="" />
        </div>
    );
};

export default LoginImage;