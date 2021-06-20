import React from 'react';
import Banner from '../Cart/Banner/Banner';
import BillingForm from './BillingForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Checkout = () => {
    return (
        <div>
            <Banner title={"Checkout"} description={"This is checkout Description"}></Banner>
            <div className="container checkout-form mt-5">
                <h4>Billing Details <FontAwesomeIcon className="brand-text-primary" icon={faArrowRight} /></h4>
                <BillingForm></BillingForm>
            </div>
        </div>
    );
};

export default Checkout;