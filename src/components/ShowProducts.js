import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            axios.get('http://localhost:8000/products')
                .then(res => {
                    setProducts(res.data.products);
                })
        }, []);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/products/delete/${id}`)
            .then(() => {
                setProducts(products.filter(product => product._id !== id));
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>ALL PRODUCTS: </h1>
            <nav>
                <ul>
                    {products.map(product => (
                        <li key={product._id}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                            <button onClick={() => deleteProduct(product._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default ShowProducts;