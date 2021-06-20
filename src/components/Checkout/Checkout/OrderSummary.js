import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
    const cart =useSelector((state) => state.allProducts.cart)
    const totalItems = cart.reduce((total, item)  => total + item.qty, 0)
    const totalBill = Math.floor(cart.reduce((total, item)  => total + (item.qty * item.dPrice), 0))
    return (
        <div className="border mb-5 p-3">
            <h5>Order Summary</h5>
            <hr />
            <p>Total Items: {totalItems}</p>
            <p>Total Cost: {totalBill}</p>
            <h5>Items Description</h5>
            <hr />
            <div>
                {
                    cart.map(item => 
                    <div className="d-flex justify-content-between">
                        <p>{item.name} ({item.qty} units)</p>
                        
                        <p>{item.qty* item.dPrice}</p>
                    </div>
                    )
                }
            </div>
            
        </div>
    );
};

export default OrderSummary;