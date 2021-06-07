import React from 'react';
import img from '../../../../Images/product-6-2.jpg'
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ProductsCard = () => {
    return (

        <div class="col-md-3 product-card mb-5">
            <div className="p-2 border">
            <img class="card-img-top mb-0" src={img} alt="Card image cap" />
            <div className="cart-btn-container">
                <div className="d-flex justify-content-center align-items-center">
                    <button className='w-50 cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button>
                    <hp className="text-white"> | </hp>
                    <button className='w-50 cart-btn'><FontAwesomeIcon icon={faBinoculars} /></button>
                </div>

            </div>
            <div class="card-body bg-light">
                <p className="mb-1">Tags</p>
                <h5 class="card-title">Apple Watch Series With White Band</h5>

                <div className="d-flex justify-content-between">
                    <p className="brand-text-primary">Price: $250.99</p>
                    <p className="text-secondary">Price: $250.99</p>
                </div>

                <small>Reviews</small>
            </div>
            </div>
        </div>

    );
};

export default ProductsCard;