import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
//    card summary total calculate value JavaScript
    let total = 0;
    let shipping = 0
    let quantity = 0;
    for(const product of cart){
        quantity = quantity+ product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }
    // How to fix total tax , total tax * 100/10
    const tax = total * 0.1;
    // grand total set 
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: ${quantity}</p>
            <p>Total Price: $ {total} </p>
            <p>Shipping Price: $ {shipping} </p>
            <p>Tax $ {tax.toFixed(2)} </p>
            <h5>Grand Total: $ {grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;