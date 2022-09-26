import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleBTnClick = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(cart);
    };


    return (
        <div className='main-container'>
            <div className="products-container">
                {
                    products.map((product) => <Product
                        product={product}
                        key={product.id}
                        handleBTnClick={handleBTnClick}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Cart Item: {cart.length}</h2>
            </div>
        </div>
    );
};

export default Shop;