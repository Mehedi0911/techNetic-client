import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import CopyRight from '../Copyright/CopyRight';
const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white mt-5">
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-3">
                        <h3>TechNetic</h3>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum iure alias ducimus!</p>
                        <div className='d-flex justify-content-start align-items-center border p-3'>
                            <FontAwesomeIcon style={{ color: '#F9BC02', fontSize: '2rem', marginRight: '1.5rem', marginBottom: '1rem' }} icon={faPhone} />
                            <div className="">
                                <p className="mb-0">Ask Us Anytime!</p>
                                <h4>+000-000-000</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h5 className="mb-3">Useful Links</h5>
                        <hr />
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Privacy Terms</p>
                        <p>Affiliate</p>
                        <p>FAQ</p>
                        <p>Contact</p>  
                    </div>

                    <div className="col-md-3">
                    <h5 className="mb-3">Customer Service</h5>
                        <hr />
                        <p>Easy Return</p>
                        <p>Shopping Guide</p>
                        <p>Shipping</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Condition</p>
                        
                    </div>

                    <div className="col-md-3">
                    <h5 className="mb-3">My Account</h5>
                        <hr />
                        <p>Login/SignUp</p>
                        <p>Dashboard</p>
                        <p>Wish List</p>
                        <p>Track Orders</p>
                        <p>Help</p>
                        
                    </div>
                </div>
            </div>
            <CopyRight></CopyRight>
        </footer>
    );
};

export default Footer;