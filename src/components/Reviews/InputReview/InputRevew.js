import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './inputreview.css'

const InputRevew = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = review => {
        console.log(review);
        axios.post('http://localhost:5000/reviews', review)
            .then(res => {
                if (res.data?.insertedId) {

                    alert('Thank You For Your Comment')
                    reset();
                }
            })
    }
    return (
        <div className="review-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label >Type Your Name</label>
                <input type="text" {...register("name")} placeholder="Your Name" /> <br />
                <label >Rating</label>
                <input type="number" max="5" {...register("rating")} placeholder="Rating out of 5" />
                <label >Comment</label>
                <input type="text"  {...register("comment")} placeholder="Type your Commnet" />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default InputRevew;