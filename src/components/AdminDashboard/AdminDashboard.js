import React, { useState } from 'react';
import './AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose, faFolderPlus, faSortAmountUpAlt, faShippingFast, faWarehouse, faUserShield } from '@fortawesome/free-solid-svg-icons'
const AdminDashboard = () => {
    const [isHidden, setHidden] = useState(false)

    const handleHiddenBtn = () => {
        setHidden(!isHidden);
    }
    return (
        <div className="d-flex admin-dashboard">
            <div className={!isHidden ? "navigator-active shadow" : "navigator-hidden"}>
                <h4 className="brand-logo">TechNetic</h4>

                <div className="navigator-links">
                    <p><FontAwesomeIcon className="nav-icons" icon={faFolderPlus} /> Products</p>
                    <p><FontAwesomeIcon className="nav-icons" icon={faSortAmountUpAlt} /> Orders</p>
                    <p><FontAwesomeIcon className="nav-icons" icon={faShippingFast} /> Shipping</p>
                    <p><FontAwesomeIcon className="nav-icons" icon={faWarehouse} /> Inventory</p>
                    <p><FontAwesomeIcon className="nav-icons" icon={faUserShield} /> Admins</p>
                </div>
            </div>
            <div className="admin-contents">
                <button onClick={() => handleHiddenBtn()} className="nav-toggle-btn">{isHidden ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faWindowClose} />}</button>

            </div>
        </div>
    );
};

export default AdminDashboard;