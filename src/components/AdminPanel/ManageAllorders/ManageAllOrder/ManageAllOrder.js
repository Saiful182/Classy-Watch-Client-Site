import React from 'react';
import { Button, Card, Col, Spinner } from 'react-bootstrap';
import useCart from '../../../hooks/useCart';
import './allorders.css'

const ManageAllOrder = (props) => {
    const { cart, setCart } = useCart();
    const { _id, name, userName, price, img, catagory, appoval, address, phoneNumber } = props.cart;
    const handelApproveIteam = id => {
        const procced = window.confirm('are you really want to approve this Order?');
        const approvedPakage = cart.filter(pakage => pakage._id === id)
        const url = `https://radiant-temple-68689.herokuapp.com/carts/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approvedPakage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated data sucessfully');
                }
            })
    }
    const handelRemoveiteam = _id => {
        const procced = window.confirm('are you really want to cancel this Order?');
        if (procced) {
            const url = `https://radiant-temple-68689.herokuapp.com/carts/${_id}`;
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
            <Card className="allorders-card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Product Name:{name}</Card.Title>
                    <Card.Title>User Name:{userName}</Card.Title>
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
                {
                    appoval !== 'Approved' && <Button style={{ 'margin': '25px 0' }} onClick={() => handelApproveIteam(_id)} variant="primary" >Approve</Button>
                }

                <Button onClick={() => handelRemoveiteam(_id)} variant="primary" > Cancel Order</Button>
            </Card>
        </Col >

    );
};

export default ManageAllOrder;