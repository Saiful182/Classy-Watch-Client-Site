import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Modal } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './product.css'
import { Rating } from 'react-simple-star-rating'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Product = () => {

    const location = useLocation();
    const history = useHistory()
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = (cart) => {
        axios.post('http://localhost:5000/carts', cart)
            .then(res => {
                if (res.data?.insertedId) {
                    reset();
                    alert('Your Watch has beed added to your Cart')
                    handleClose();
                    const destination = '/products';
                    history.replace(destination);
                }
            })
    }
    const [rating, setRating] = useState(0)
    const { Id } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${Id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    let num = product?.ratting;

    const handleRating = value => {
        setRating(value);
        // Some logic
    }
    return (
        <div className="singleproduct">
            <div>
                <>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Fill The Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input type="hidden"{...register("userName")} value={user.displayName} />
                                <input type="hidden" {...register("email")} value={user.email} />
                                <input type="hidden" {...register("name")} value={product.name} /> <input type="hidden" {...register("price")} value={product.price} /> <input type="hidden" {...register("catagory")} value={product.catagory} />
                                <input type="hidden" {...register("modelNo")} value={Id} />

                                <input type="hidden" {...register("appoval")} value='Pending' />

                                <input type="hidden" {...register("img")} value={product.img} />
                                <label >Your Age</label>
                                <input required type="number" {...register("userAge")} />
                                <label >Shipping Address</label> <br />
                                <input required type="text" {...register("address")} />
                                <label >Phone Number</label> <br />
                                <input required type="tel" {...register("phoneNumber")} />
                                <input className="btn btn-primary" type="submit" />
                            </form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </>
            </div>
            <Row xs={1} md={2}  >

                <Col>
                    <div className="singleproduct-img">
                        <img src={product.img} alt="" />
                    </div>

                </Col>
                <Col>
                    <div>
                        <h3>{product.name}</h3>
                        <h5>Model No:{product._id}</h5>
                        <h4>Brand Name:{product.brand}</h4>
                        <h4>Price:{product.price}$</h4>
                        <h4>Rating:{<Rating onClick={handleRating} ratingValue={num} /* Rating Props */ />}</h4>
                        <p>{product.description}</p>
                        <h5>Warranty: {product.warranty}</h5>
                    </div>
                    <Button onClick={handleShow}>Buy Now</Button>
                </Col>

            </Row>


        </div >
    );
};

export default Product;