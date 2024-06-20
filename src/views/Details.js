import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => setProduct({
                ...res.data.product
            }))
    }, [id])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/products/delete/${id}`)
            .then(() => {
                navigate('/');
            })
            .catch(err => console.error(err));
    };
    console.log(product);
    console.log(product.title);
    console.log(product.price);
    console.log(product.description);
    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={deleteProduct}>Delete Product</button>
        </div>
    )

}
export default Details;