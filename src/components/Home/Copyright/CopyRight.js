import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa, faCcMastercard, faCcApplePay, faCcAmex, faCcPaypal } from '@fortawesome/free-brands-svg-icons'
const CopyRight = () => {
    return (
        <div className="bg-brand-dark shadow p-2">
            <div className="container d-flex justify-content-between align-items-center">
                <small>copyright@ {new Date().getFullYear()} all rights reserved</small>
                <div>
                <FontAwesomeIcon style={{ color: '#0F448E', fontSize: '1.75rem', marginRight: '1.5rem', marginBottom: '1rem' }} icon={faCcVisa} />
                <FontAwesomeIcon style={{ color: '#F29600', fontSize: '1.75rem', marginRight: '1.5rem', marginBottom: '1rem' }} icon={faCcMastercard} />
                <FontAwesomeIcon style={{ color: '#303030', fontSize: '1.75rem', marginRight: '1.5rem', marginBottom: '1rem' }} icon={faCcApplePay} />
                <FontAwesomeIcon style={{ color: '#016CCA', fontSize: '1.75rem', marginRight: '1.5rem', marginBottom: '1rem' }} icon={faCcAmex} />
                <FontAwesomeIcon style={{ color: '#0097D7', fontSize: '1.75rem', marginRight: '1.5rem', marginBottom: '1rem' }} icon={faCcPaypal} />
                </div>
            </div>
        </div>
    );
};

export default CopyRight;