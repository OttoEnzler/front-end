import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/products/new', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
                <label>Price: </label>
                <input type="text" name="price" onChange={(e) => setPrice(e.target.value)}/>
                <label>Description: </label>
                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ProductForm;