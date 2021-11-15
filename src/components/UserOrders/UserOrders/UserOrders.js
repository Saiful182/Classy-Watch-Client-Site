
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import UserOrder from '../UserOrder/UserOrder';
import './userorders.css';

const UserOrders = () => {
    const { cart } = useCart();
    const { user } = useAuth();
    const userCart = cart.filter(cart => (cart.email === user.email));
    let iteamPrice = 0;
    let vat = 0;
    let total = 0;
    for (const user of userCart) {
        iteamPrice = iteamPrice + parseInt(user?.price);
        vat = (vat +
            (((parseInt(user?.price)) * (15 / 100))));
    }
    total = total + iteamPrice + vat;
    return (
        <div className="cart-container">
            <Row >
                <Col sm={8}>
                    <Row sm={1} md={2} className="g-4">
                        {userCart.map(singleCart =>
                            <UserOrder userCart={userCart}
                                singleCart={singleCart} key={singleCart._id}
                            ></UserOrder>)}
                    </Row>
                </Col>
                <Col sm={4}>
                    <div className="cart-item">
                        <h4>Total Added Items :{userCart?.length}</h4>
                        <h5>Price: {iteamPrice}</h5>
                        <h5>Vat: {vat}</h5>

                        <hr />
                        <h5>Total: {total}</h5>

                        Select Payment Method

                        <div className="payment-form">
                            <Form.Group>
                                <Form.Check
                                    type="radio"
                                    label="Cash On Delivery"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Pay Now"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Button as={Link} type="submit" to="/pay">Pay Now</Button>
                            </Form.Group>

                        </div>

                    </div>

                </Col>



            </Row>
        </div>
    );
};

export default UserOrders;