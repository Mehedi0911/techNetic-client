import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faExchangeAlt, faTags, faHeadset} from '@fortawesome/free-solid-svg-icons'
const Features = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex justify-content-center align-items-center p-3">
                    <FontAwesomeIcon style={{ fontSize:'2rem', marginRight:'1.5rem', marginBottom:'1rem'}}  icon={faTruck} />
                    <div>
                        <h5 className="mb-2">Free Delivery</h5>
                        <p>Within 24 hours</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-center align-items-center p-3">
                    <FontAwesomeIcon style={{ fontSize:'2rem', marginRight:'1.5rem', marginBottom:'1rem'}}  icon={faExchangeAlt} />
                    <div>
                        <h5 className="mb-2">Quick Exchange</h5>
                        <p>3 days Return</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-center align-items-center p-3">
                    <FontAwesomeIcon style={{ fontSize:'2rem', marginRight:'1.5rem', marginBottom:'1rem'}}  icon={faTags} />
                    <div>
                        <h5 className="mb-2">Unlimited Discounts</h5>
                        <p>Sale Offers Daily</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-center align-items-center p-3">
                    <FontAwesomeIcon style={{ fontSize:'2rem', marginRight:'1.5rem', marginBottom:'1rem'}}  icon={faHeadset} />
                    <div>
                        <h5 className="mb-2">24/7 Support</h5>
                        <p>Fast Customer Service</p>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Features;