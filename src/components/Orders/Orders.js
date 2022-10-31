import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart} = useLoaderData(); // {products:products, initialCart:initialCart}
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id)=>{
       const reaming = cart.filter(product=> product.id !== id);
       setCart(reaming);
       removeFromDb(id)
    }
    const clearCcart = ()=>{
        setCart([])
        deleteShoppingCart();
       }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product=> <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem> )
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Plases <Link to='/shop'>Shop more</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} 
                clearCcart={clearCcart}/>
            </div>
        </div>
    );
};

export default Orders;