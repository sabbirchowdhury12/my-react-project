import React from 'react';
import './Product.css';

const Product = (props) => {

    const { product, handleBTnClick } = props;
    const { id, img, name, quantity, ratings, price, seller, shipping } = product;
    return (
        <div className='product'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p >Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleBTnClick(product)} className='btn-cart'>Add To Cart</button>

        </div>
    );
};

export default Product;