import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CartSummery = () => {
    let history = useHistory()
    const [shippingPrice, setShippingPrice] = useState(0)
    const cart = useSelector((state) => state.allProducts.cart)
    const totalItems = cart.reduce((total, item)  => total + item.qty, 0)
    const totalBill = cart.reduce((total, item)  => total + (item.qty * item.dPrice), 0)
    const vat = Math.floor(totalBill * 7 / 100)
    const handleShippingOption = (e) => {
            setShippingPrice(e);
    }
    return (
        <div className="p-3 border text-secondary">
            <h5>Cart summery</h5>
            <hr />
            <h5>Total Items: {totalItems}</h5>
            <h4>Subtotal : $ {totalBill}</h4>
            <hr />
            <h4 className="mb-3">Shipping</h4>
            <div>

                <div className="d-flex align-items-center">
                    <input onClick={() => handleShippingOption(0)} style={{ marginRight: '.75rem' }} className="mb-3" type="radio" name="shipping" id="" />
                    <label className="mb-3" htmlFor="shipping">Free Shipping</label><br />
                    <h5 style={{ marginLeft: 'auto' }}>$0.00</h5>
                </div>

                <div className="d-flex align-items-center">
                    <input onClick={() => handleShippingOption(25)} style={{ marginRight: '.75rem' }} className="mb-3" type="radio" name="shipping" id="" />
                    <label className="mb-3" htmlFor="shipping">Standard Shipping</label><br />
                    <h5 style={{ marginLeft: 'auto' }}>$25.00</h5>
                </div>
                <div className="d-flex align-items-center">
                    <input onClick={() => handleShippingOption(50)} style={{ marginRight: '.75rem' }} className="mb-3" type="radio" name="shipping" id="" />
                    <label className="mb-3" htmlFor="shipping">Express Shipping</label><br />
                    <h5 style={{ marginLeft: 'auto' }}>$50.00</h5>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>VAT(7%)</h5>
                <h5>${vat}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Shipping Cost</h5>
                <h5>${shippingPrice}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <h5>Total</h5>
                <h5>${totalBill + shippingPrice + vat}</h5>
                </div>
                <hr />
                <button onClick={() => history.push('/checkout')} className="m-cart-btn w-100 mb-4">Proceed To Checkout</button>
                <button onClick={() => history.push('/')} className="m-wishlist-btn w-100">Continue Shopping</button>

                
            </div>

        </div>
    );
};

export default CartSummery;