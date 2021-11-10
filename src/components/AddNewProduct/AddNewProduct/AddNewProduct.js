
import axios from 'axios';
import React from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './addnewproduct.css'

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data?.insertedId) {

                    <Alert variant={'info'}>
                        Added to Your Card sucessfully!
                    </Alert>

                    reset();
                }
            })
    };
    return (
        <div className="whole-container">
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label >Type Name Of Product</label>
                    <input type="text" {...register("name")} placeholder="Product Name" /> <br />
                    <label >Catagory</label>
                    <input {...register("catagory")} placeholder="Men or Women " />
                    <label >Price</label>
                    <input type="number"  {...register("price")} placeholder="Price" />
                    <label >Write a short description</label>
                    <input type="text" {...register("description")} placeholder="Give a short description" />
                    <label >Stars Out of 5</label>
                    <input type="number" {...register("ratting")} placeholder="Out of 5" max='5' />
                    <label >Brand Name</label>
                    <input  {...register("brand")} placeholder="Brand Name" />
                    <label >image</label>
                    <input {...register("img")} placeholder="Give image link" />
                    <label >Warranty</label>
                    <input type="text" {...register("warranty")} placeholder="Example: 3 Month" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;