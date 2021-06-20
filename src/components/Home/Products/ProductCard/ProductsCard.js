import React, { useState } from 'react';
import img from '../../../../Images/product-6-2.jpg'
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import saleIcon from '../../../../Images/Icons/sale.svg'
import DetailsProductModal from './DetailsProductModal';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProducts } from '../../../../redux/actions/productActions';
import { addToCart } from '../../../../redux/actions/cartActions';
import { useEffect } from 'react';
const ProductsCard = ({product}) => {
    const {_id,imgURL, name, price, dPrice, productDetails, tags, category} = product;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
      dispatch(setSelectedProducts(product))
    };
  
    const handleClose = () => {
      setOpen(false);

    };

    //saving the cart to the local storage..........

    const cart =  useSelector((state) => state.allProducts.cart)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    return (

        <div class="col-md-3 product-card mb-5">
            <div className="p-2 border bg-light">
                {
                    tags === 'onSale' && <img className="saleIcon" src={saleIcon} alt="" />
                }
            <img style={{height:'250px'}} className="mb-0 w-100" src={imgURL} alt="Card image cap"/>
            <div className="cart-btn-container">
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={() => dispatch(addToCart(_id))} className='w-50 cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button>
                    <hp className="text-white"> | </hp>
                    <button onClick={() => handleOpen()} className='w-50 cart-btn'><FontAwesomeIcon icon={faBinoculars} /></button>
                </div>

            </div>
            <div class="card-body bg-light">
                <p className="mb-1">{category}</p>
                <h5 class="card-title">{name}</h5>

                <div className="d-flex justify-content-between">
                    <p className="brand-text-primary">Price: ${dPrice}</p>
                    {
                        price && <p className="text-secondary">$ {price}</p>
                    }
                </div>

                <small>Reviews</small>
            </div>
            </div>
            <DetailsProductModal handleClose={handleClose} handleOpen={handleOpen} open={open}></DetailsProductModal>
        </div>

    );
};

export default ProductsCard;