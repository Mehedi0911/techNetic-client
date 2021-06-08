import React, { useState } from 'react';
import './AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose, faFolderPlus, faSortAmountUpAlt, faShippingFast, faWarehouse, faUserShield, faOutdent } from '@fortawesome/free-solid-svg-icons'
import AddProduct from './AddProduct/AddProduct';

const AdminDashboard = () => {
    const [isActive, setActive] = useState('products');
    const [isHidden, setHidden] = useState(false)

    const handleHiddenBtn = () => {
        setHidden(!isHidden);
    }
    const toggleClass = (e) => {
        setActive(e);
    }
    return (
        <div className="d-flex admin-dashboard">
            <div className={!isHidden ? "navigator-active shadow" : "navigator-hidden"}>
                <h4 className="brand-logo">TechNetic</h4>

                <div className="navigator-links">
                    <p className={isActive === "products" ? "active-links" : ''} onClick={() => toggleClass('products')}><FontAwesomeIcon className="nav-icons" icon={faFolderPlus} /> Products</p>
                    <p className={isActive === "orders" ? "active-links" : ''} onClick={() => toggleClass('orders')}><FontAwesomeIcon className="nav-icons" icon={faSortAmountUpAlt} /> Order List</p>
                    <p className={isActive === "shipping" ? "active-links" : ''} onClick={() => toggleClass('shipping')}><FontAwesomeIcon className="nav-icons" icon={faShippingFast} /> Shipping</p>
                    <p className={isActive === "inventory" ? "active-links" : ''} onClick={() => toggleClass('inventory')}><FontAwesomeIcon className="nav-icons" icon={faWarehouse} /> Inventory</p>
                    <p className={isActive === "admins" ? "active-links" : ''} onClick={() => toggleClass('admins')}><FontAwesomeIcon className="nav-icons" icon={faUserShield} /> Admins</p>
                </div>
                <button className="back-btn"><FontAwesomeIcon icon={faOutdent} /> Back To Home</button>
            </div>

            <div className="admin-contents">

                <div className="admin-nav bg-brand-dark shadow d-flex justify-content-between align-items-center">
                    <div className='d-flex justify-content-between align-items-center'>
                        <button onClick={() => handleHiddenBtn()} className="nav-toggle-btn">{isHidden ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faWindowClose} />}</button>
                        <h5 className="text-white">{isActive}</h5>
                    </div>
                    <h5 className="text-white mt-1">Name</h5>
                </div>

                {
                    isActive === "products" ? 
                    <AddProduct></AddProduct>
                    : ''
                }

            </div>
        </div>
    );
};

export default AdminDashboard;