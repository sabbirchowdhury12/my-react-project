import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleBTnClick = (product) => {
        let newCart = [];
        const exits = cart.find((x) => x.id === product.id);
        if (!exits) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const rest = cart.filter((x) => x.id !== product.id);
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, product];
        }
        setCart(newCart);
        addToDb(product.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;