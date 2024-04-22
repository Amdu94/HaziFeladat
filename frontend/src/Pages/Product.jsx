// ProductForm.js
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price:Number(price), image, isActive })
            });
            if (response.ok) {
                navigate('/')
            } else {
                console.error('Error during product creation:', await response.text());
            }
        } catch (error) {
            console.error('Error during product creation:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Product Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <label>
                <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
                Active
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default ProductForm;
