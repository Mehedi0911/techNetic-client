import React from 'react';
import Banner from './Banner/Banner';
import CartTable from './CartTable';
import CartSummery from './CartSummery';
const Cart = () => {
    
    return (
        <div >
            <Banner title={"Your Cart"} description={"Lorem ipsum dolor sit amet."}></Banner>
            <div style={{padding:'0 5%'}}>
                <div className="row">
                    <div className="col-md-8 mt-5">
                        <h5>Cart Items</h5>
                       <CartTable></CartTable>
                    </div>
                    <div className="col-md-4 mt-5">
                       <CartSummery></CartSummery>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;