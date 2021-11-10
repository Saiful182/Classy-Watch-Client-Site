import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import UserOrder from '../UserOrder/UserOrder';
import './userorders.css';

const UserOrders = () => {
    const { cart } = useCart();
    const { user } = useAuth();

    const userCart = cart.filter(cart => (cart.email === user.email));

    console.log(userCart.length);
    return (
        <div className="cart-container">
            <Row >
                <Col sm={8}>
                    <Row sm={1} md={2} className="g-4">
                        {userCart.map(singleCart =>
                            <UserOrder
                                singleCart={singleCart} key={singleCart._id}
                            ></UserOrder>)}
                    </Row>
                </Col>
                <Col sm={4}>
                    <h4>Total Added Items :{userCart.length}</h4>
                </Col>

            </Row>
        </div>
    );
};

export default UserOrders;