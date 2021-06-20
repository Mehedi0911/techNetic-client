import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsCard from '../Products/ProductCard/ProductsCard';
import HotDealsBanner from './HotDealsBanner/HotDealsBanner';

const HotDeals = () => {
  const products = useSelector((state) => state.allProducts.products);
  
    return (

        <div style={{ background: '#4D4376' }} className="hotDeals-container p-5 mt-5">
            <h4 className="text-center brand-text-primary">Find Hot Deals Today</h4>
            <p className="text-center text-white">Don't miss the most Amazing Deals in the town</p>

            <div className="container mt-5">

                <div className="row">
                    <HotDealsBanner></HotDealsBanner>
                    {
                        products.map(product => product.tags === 'onSale' && 
                           
                                    <ProductsCard product={product}></ProductsCard>
                                
                            )
                    }
                   

                </div>
            </div>
        </div>
    );
};

export default HotDeals;