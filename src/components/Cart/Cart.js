import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
   
    let total = 0;
    let shipping = 0
    for(const product of cart){
        total += product.price;
        shipping += product.shipping;
    }
    const tax = total * 0.1;

    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: ${cart.length}</p>
            <p>Total Price: ${total} </p>
            <p>Shipping Price: ${shipping} </p>
            <p>Tax $ {tax.toFixed(2)} </p>
            <h5>Grand Total: $ {grandTotal} </h5>
        </div>
    );
};

export default Cart;