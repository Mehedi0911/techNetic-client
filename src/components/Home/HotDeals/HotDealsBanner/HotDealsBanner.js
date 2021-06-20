import React from 'react';
import watchImg from '../../../../Images/watch2.png'
import CountDown from './CountDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
const HotDealsBanner = () => {
    return (
        <div style={{ backgroundImage: `url(${watchImg})`,backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="col-md-6">
            <div style={{   }} className="p-5">
                <div className="row mb-5">
                    <h3 style={{color:'#4D4476'}}>Deal of The Day</h3>
                    <p className="text-secondary">Just limited Quantities</p>
                </div>
                <div className="row mt-5">
                    <h3 style={{color:'#4D4476'}}>Limited Time Offer <br /> Smart Watch</h3>
                    <p className="brand-text-primary">$ 375.99 <span className="text-secondary"> was $450.99</span></p>
                    <button className="brand-btn-text-primary w-25">shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className="row mt-5 pt-5">
                    <CountDown></CountDown>
                </div>
            </div>
        </div>
    );
};



export default HotDealsBanner;