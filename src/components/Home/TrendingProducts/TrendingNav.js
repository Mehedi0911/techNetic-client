import React from 'react';

const TrendingNav = () => {
    return (
        <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
            <h4>Top Selling Product</h4>
            <div className="d-flex">
                <p style={{marginLeft:'1rem', borderBottom:'2px solid orange'}}>All</p>
                <p style={{marginLeft:'1rem'}}>Accessories</p>
                <p style={{marginLeft:'1rem'}}>Gadgets</p>
                <p style={{marginLeft:'1rem'}}>Electronics</p>
            </div>
        </div>
    );
};

export default TrendingNav;