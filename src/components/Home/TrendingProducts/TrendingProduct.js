import React, { useRef, useState } from "react";
import TrendingBanner from './TrendingBanner/TrendingBanner';
import TrendingNav from './TrendingNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import saleIcon from '../../../Images/Icons/sale.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../../Utilities/style.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { useSelector } from "react-redux";
import ProductsCard from "../Products/ProductCard/ProductsCard";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);



const TrendingProduct = () => {
    const products = useSelector((state) => state.allProducts.products)
    const swiperRef = useRef(null);
    return (
        <div className="container">
            <TrendingNav></TrendingNav>
            <div className="row">
                <div className="col-md-3">
                    <TrendingBanner></TrendingBanner>
                </div>
                <div className="col-md-9">
                    <>
                        <Swiper
                            ref={swiperRef}
                            slidesPerView={3}
                            centeredSlides={false}
                            spaceBetween={30}
                            
                            
                            className="mySwiper"
                        >

                            {
                                products.map(pd =>
                                    <SwiperSlide>
                                        <div class="product-card mb-5">
                                            <div className="p-2 border bg-light">
                                                {
                                                    pd.tags === 'onSale' && <img className="saleIcon" src={saleIcon} alt="" />
                                                }
                                                <img style={{height:'250px'}} className="mb-0" src={pd.imgURL} alt="Card image cap" />
                                                <div className="cart-btn-container">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <button className='w-50 cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button>
                                                        <hp className="text-white"> | </hp>
                                                        <button className='w-50 cart-btn'><FontAwesomeIcon icon={faBinoculars} /></button>
                                                    </div>

                                                </div>
                                                <div class="card-body bg-light">
                                                    <p className="mb-1">{pd.category}</p>
                                                    <h5 class="card-title">{pd.name}</h5>

                                                    <div className="d-flex justify-content-between">
                                                        <p className="brand-text-primary">Price: ${pd.dPrice}</p>
                                                        {
                                                            pd.price && <p className="text-secondary">$ {pd.price}</p>
                                                        }
                                                    </div>

                                                    <small>Reviews</small>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>)

                            }







                        </Swiper>


                    </>
                </div>
            </div>
        </div>
    );
};

export default TrendingProduct;