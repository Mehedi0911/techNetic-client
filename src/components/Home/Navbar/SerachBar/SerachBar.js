import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faRandom, faHeart, faShoppingBasket, faTags } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import './SearchBar.css'
import { useHistory } from 'react-router-dom';
const SerachBar = () => {
    const cart = useSelector((state) => state.allProducts.cart);
    const totalItems = cart.reduce((total, item)  => total + item.qty, 0)

    const history = useHistory();

    const handleCartBtn = () => {
        history.push('/cart');
    }
    return (
        <div className="bg-brand-dark p-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="brand-text-primary">TechNetic</h5>
                </div>
                <div style={{ width: '400px' }}>
                    <p className="brand-text-primary mt-2 discount-text"><FontAwesomeIcon icon={faTags} /> Flat 50% Discount! | Enjoy SHopping!!</p>
                </div>
                <div style={{ width: '250px' }} className="cart-summery d-flex justify-content-between brand-text-light">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faRandom} />
                        <p>Compare</p>
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faHeart} />
                        <p>Wishlist</p>
                    </div>
                    <div onClick={handleCartBtn} className="text-center cart-details">
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        <p>Cart</p>
                       <div  className="items-count d-flex align-items-center justify-content-center">
                        <p className="mb-0">{totalItems}</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SerachBar;