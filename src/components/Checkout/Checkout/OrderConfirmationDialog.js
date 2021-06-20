import React from 'react';
import congratsImg from '../../../Images/Icons/congrats.svg'
const OrderConfirmationDialog = () => {
    return (
        <div className="container w-75 mt-5">
            <div style={{height:'50vh'}} className="p-5n text-center bg-light shadow">
                <h3 className="mb-3 brand-text-primary">congrats!!</h3>
                <img style={{height:'120px'}} src={congratsImg} alt="" />
                <p className="mt-3">Your Order Has Been Placed Successfully</p>
                <p>Tracking Number: </p>
                <div className="d-flex justify-content-center">
                    <button style={{marginRight:'1rem'}} className="brand-btn-regular-primary">Dashboard</button>
                    <button className="btn btn-danger">Logout</button>
                </div>

            </div>
        </div>
    );
};

export default OrderConfirmationDialog;