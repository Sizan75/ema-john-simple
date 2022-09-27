import React from 'react';
import './Cart.css';

const Cart = (props) => {
const {cart} = props;

let total=0;
let shipping=0;
let quantity = 0;
for(const product of cart){
    quantity =quantity + product.quantity
    total=total+ product.price * product.quantity;
    shipping=shipping+ product.shipping
}
let tax= parseFloat((total* .1).toFixed(2));
let grandTotal= total + tax + shipping ;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
           <p>Selected Items: {quantity}</p>
           <p>Total Price: {total}</p>
           <p>Total Shipping: {shipping}</p>
           <p>Tax: {tax}</p>
           <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;