import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import OrderSummary from './OrderSummary';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../redux/actions/cartActions';

const PaymentForm = ({ handleBackBtn, customerData }) => {
    const cart =useSelector((state) => state.allProducts.cart)
    const dispatch = useDispatch();
    const totalBill = Math.floor(cart.reduce((total, item)  => total + (item.qty * item.dPrice), 0))
    const stripe = useStripe();
    const elements = useElements();

    let history = useHistory();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            history.push('/orderPlaced')
            localStorage.clear();
            dispatch(clearCart());
        }
    };

    //Handle Saving Payment and Booking details to database

    
    const handleBooking = () => {
        const newBooking = {

        }
        history.push("/confirm");
        console.log(newBooking);
        const url = 'https://arcane-reef-18482.herokuapp.com/bookService'
        fetch(url, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => {
                console.log('server side response', res);
            })
    }

    return (

        <div className="container w-50 mt-5">
            <OrderSummary></OrderSummary>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-success mr-3 mt-5 w-25" type="submit" disabled={!stripe}>Pay ${totalBill}</button>
                <button style={{marginLeft:'1rem'}} className="btn btn-warning mr-3 mt-5 w-25 text-white">Review Cart</button>
                

            </form>

        </div>


    );
};

export default PaymentForm;