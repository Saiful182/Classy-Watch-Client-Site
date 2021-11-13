
import React from 'react';
import { Card, Col, Spinner, Button } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import './UserOrders.css'

const UserOrder = (props) => {
    const { cart, setCart } = useCart();
    const { _id, name, price, img, catagory, appoval, address, phoneNumber } = props.singleCart;
    const handelRemoveiteam = _id => {
        const procced = window.confirm('are you really want to cancel this data?');
        if (procced) {
            const url = `http://localhost:5000/carts/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingCart = cart.filter(cart => cart._id !== _id)
                        setCart(remainingCart);
                        alert('Your order Canceled Successfully');

                    }
                })

        }

    }
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price :{price}$
                    </Card.Text>
                    <Card.Text>
                        Catogory: {catagory}'s collection
                    </Card.Text>
                    {
                        appoval === "Pending" ? <Card.Text>
                            Approval: {appoval} {<Spinner className="spinner-animation" animation="grow" variant="danger" />}
                        </Card.Text> : <Card.Text>
                            Approval: {appoval} {<Spinner className="spinner-animation" animation="grow" variant="success" />}
                        </Card.Text>
                    }
                    <Card.Text>
                        Address :{address}
                    </Card.Text> <Card.Text>
                        Phone :{phoneNumber}
                    </Card.Text>

                </Card.Body>
                <Button onClick={() => handelRemoveiteam(_id)} variant="primary" > Cancel Order</Button>
            </Card>
        </Col >
    );
};

export default UserOrder;