import React from 'react';

const NewDealsCard = () => {
    return (
        <div className="container mt-5">
            <div style={styles.dealsContainer} className="row align-items-center">
                <div className="col-md-4 text-right">
                    <h4 className="brand-text-primary">New Deals</h4>
                    <h5>Starts@ 12AM Everyday</h5>
                    
                </div>
                <div className="col-md-4">
                    <p className="mb-0 ">Get FREE SHIPPING* & 5% rewards on <br />
                                        every order with our on going rewards program</p>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                    <button className="brand-btn-regular-primary">Get a Membership @ $49/yr</button>
                </div>

            </div>
        </div>
    );
};

const styles = {
    dealsContainer: {
        backgroundColor: 'white',
        border: '13px solid #4D4476',
        padding: '1.5rem 1rem'
    }
}

export default NewDealsCard;