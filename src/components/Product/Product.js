import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = ({product , handleAddToCart}) => {

    const {name , img , seller, price, ratings } =product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p>Distributor: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           </div>
           <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
            <p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;