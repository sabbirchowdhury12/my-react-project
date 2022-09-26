import React from 'react';
import './Product.css';

const Product = (props) => {

    const { img, name, quantity, ratings, price, seller, shipping } = props.product;
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
            <button className='btn-cart'>Add To Cart</button>

        </div>
    );
};

export default Product;