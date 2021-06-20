import React from 'react';
import GhomeImg from '../../../../Images/gHome.jpg'
import './Banner.css'
const TrendingBanner = () => {
    return (
        <div className="trending-banner p-4" >
          
               <div className="row-1">
                   <h5 className="brand-text-primary">One Special Deal <br />Only Today</h5>
               </div>
               <div className="row-2 text-white">
                   <h5>Google Home <br /> One Time Limited Offer!</h5>
                   <p className="brand-text-primary">Grab it@ $249.99 <small>only</small></p>
               </div>
               <button className="">Grab It Now</button>
           </div>
        
    );
};

export default TrendingBanner;