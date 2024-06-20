import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/products/update/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Price: </label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>Description: </label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;