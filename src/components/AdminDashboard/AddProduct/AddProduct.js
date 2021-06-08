import React from 'react';
import ProductForm from './ProductForm/ProductForm';

const AddProduct = () => {
    return (
        <div className="p-5">
            <div className="product-form">
                <ProductForm></ProductForm>
            </div>
            <div className="product-list">
                
            </div>
        </div>
    );
};

export default AddProduct;