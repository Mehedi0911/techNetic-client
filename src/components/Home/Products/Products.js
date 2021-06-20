import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-scroll';
import ProductsCard from './ProductCard/ProductsCard';
import './Products.css'
import {setProducts} from '../../../redux/actions/productActions'

const Products = () => {
    const [isActive, setActive] = useState('featured');
    const [productsData, setProductsData] = useState([])
    const products = useSelector((state) => state.allProducts.Products)
    const dispatch = useDispatch();

    const toggleClass = (e) => {
        setActive(e);
    }

    const fetchAllProducts = async () => {
        const response = await axios.get("https://infinite-savannah-51052.herokuapp.com/allProducts")
        .catch((err) => {
            console.log("error message", err);
        })
      
        dispatch(setProducts(response.data))
        
    }

    useEffect(() => {
        fetchAllProducts();
    },[])

    const fetchCategoryProducts = async () => {
        const response = await axios.get("https://infinite-savannah-51052.herokuapp.com/productsTag?tags="+isActive)
        .catch((err) => {
            console.log("error message", err);
        })
        console.log(response.data);
        setProductsData(response.data)
        
        
    }

    useEffect(() => {
        fetchCategoryProducts();
    },[isActive])

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
                {
                    productsData.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;