import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, handleRemoveItem}) => {
   
    const {name, price, quantity, img, shipping, id } = product;
    return (
        <div className='review_item' >
           <div>
           <img src={img} alt="prducts imgae" />
           </div>
            <div className='review_detalis_container'>
                <div className="review_details">
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping:{shipping}</p>
                </div>
                <div className='delete_container'>
                <button onClick={()=>handleRemoveItem (id)} className='btn_delete'>
                <FontAwesomeIcon className='delete_icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;