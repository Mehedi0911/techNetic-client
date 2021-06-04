import React from 'react';
import './TopBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAngleDown } from '@fortawesome/free-solid-svg-icons'
const TopBar = () => {
    return (
        <div className="bg-brand-dark text-secondary p-1">

            <div className="container d-flex justify-content-between topBar">

                <div>
                    <p className="mb-0 p-1"> <FontAwesomeIcon icon={faPhone} /> 000-0000-000</p>
                </div>
                <div className="d-flex justify-content-between imp-links">
                    <div>
                        <div className="dropdown">
                            <p className="dropbtn mb-0 mt-1">USD <FontAwesomeIcon icon={faAngleDown} /></p>
                            <div className="dropdown-content">
                                <a href="#">USD</a>
                                <a href="#">EUR</a>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown">
                            <p className="dropbtn mb-0 mt-1">English <FontAwesomeIcon icon={faAngleDown} /></p>
                            <div className="dropdown-content">
                                <a href="#">English</a>
                                <a href="#">French</a>
                                <a href="#">Arabic</a>
                            </div>
                        </div>
                    </div>
                    <div className="signIn-btn">
                        <p className="mb-0 mt-1">SignIn/SignUp</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TopBar;