import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
const ManageProduct = (props) => {
    const { products, setProducts } = useProducts();
    const { name, _id, price, description,
        brand,
        img } = props.product;
    const handeleDelete = id => {
        const procced = window.confirm('are you really want to Delete this product?');
        if (procced) {
            const url = `https://radiant-temple-68689.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remainingProducts = products.filter(products => products._id !== id)
                        setProducts(remainingProducts);
                        alert('Product Deleted Successfully');

                    }
                })

        }
    }
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='name-title'>Name: {name}</Card.Title>
                    <Card.Title>Price: {price}$</Card.Title>
                    <Card.Title>Brand Name:  {brand}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 150)}
                    </Card.Text>
                </Card.Body>
                <Button onClick={() => handeleDelete(_id)} variant="primary">
                    Delete this Product
                </Button>
            </Card>
        </Col>
    );
};

export default ManageProduct;