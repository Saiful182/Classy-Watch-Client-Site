import React from 'react';
import { Row } from 'react-bootstrap';
import useCart from '../../../hooks/useCart';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import './manageallorders.css'
const ManageAllOrders = () => {
    const { cart } = useCart();
    return (
        <div className="allorders-container">
            <h4>Total Added Items :{cart.length}</h4>

            <Row sm={1} md={2} lg={3} className="g-4">

                {
                    cart.map(cart => <ManageAllOrder cart={cart} key={cart._id}></ManageAllOrder>)
                }
            </Row>
        </div>
    );
};

export default ManageAllOrders;