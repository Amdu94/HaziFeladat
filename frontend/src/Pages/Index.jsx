import React, { useState, useEffect } from 'react';
import Loading from "../Components/Loading/Loading";
import Products from "../Components/Products/Products";

const fetchProducts = () => {
    return fetch('/products').then((res) => res.json());
};
const ProductForm = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts()
            .then((products) => {
                setLoading(false);
                setProducts(products);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching users: {error.message}</div>;
    }

    return <Products products={products} />;
}
export default ProductForm;
