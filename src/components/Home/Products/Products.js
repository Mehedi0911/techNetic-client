import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ProductsCard from './ProductCard/ProductsCard';
import './Products.css'

const Products = () => {
    const [isActive, setActive] = useState('featured');
    const toggleClass = (e) => {
        setActive(e);
    }
    return (
        <div className="container mt-5">
            <div className="toggles p-3 d-flex justify-content-center">
                <div className='toggles-container d-flex'>
               
                    <p onClick={() =>toggleClass('featured')} className={isActive === "featured"? 'active-link' : 'inActiveLink'}>Featured</p>
                    <p onClick={() =>toggleClass('onSale')}className={isActive === "onSale"? 'active-link' : 'inActiveLink'}>On Sale</p>
                    <p onClick={() =>toggleClass('trending')} className={isActive === "trending"? 'active-link' : 'inActiveLink'}>Trending</p>
                </div>
            </div>
            <div className="row">
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
            </div>
        </div>
    );
};

export default Products;