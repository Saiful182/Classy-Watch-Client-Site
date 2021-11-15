import React from 'react';
import { Col } from 'react-bootstrap';

const UserCart = (props) => {

    const { price } = props.singleCart;
    let iteamPrice = 0;
    let NewIteamPrice = { ...iteamPrice, price }
    return (
        <div>
            <h4>Total Added Items :{props?.userCart?.length}</h4>
            <h2>Price: {NewIteamPrice}</h2>


        </div>
    );
};

export default UserCart;