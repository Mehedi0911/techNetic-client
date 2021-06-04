import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faRandom, faHeart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
const SerachBar = () => {
    return (
        <div className="bg-brand-dark p-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="brand-text-primary">TechNetic</h5>
                </div>
                <div style={{width:'300px'}}>
                <input className="form-control" type="text" placeholder="search products"/>
                </div>
                <div style={{width:'250px'}} className="cart-summery d-flex justify-content-between brand-text-light"> 
                    <div className="text-center">
                        <FontAwesomeIcon icon={faRandom} />
                        <p>Compare</p>
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faHeart} />
                        <p>Wishlist</p>
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SerachBar;