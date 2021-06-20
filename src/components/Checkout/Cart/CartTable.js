import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQty, increaseQty, removeFromCart } from '../../../redux/actions/cartActions';
const CartTable = () => {
    const cart = useSelector((state)=> state.allProducts.cart);
    const dispatch =  useDispatch()
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    return (
        <div>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th style={{textAlign:'left', paddingLeft:'20px'}} className="w-50">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.length === 0 && <h5 className="mt-5 mb-5">No items in the cart!</h5>
                    }
                {
                    cart.map( item => 
                        <tr>
                        <td><img style={{height:'50px'}} src={item.imgURL} alt="" /></td>
                        <td style={{textAlign:'left'}} className="p-4">{item.name}</td>
                        <td className="p-4">{item.dPrice}</td>
                        <td>
                            <div className="d-flex justify-content-center align-items">
                            <button onClick={() => dispatch(decreaseQty(item._id))} className="add-btn">-</button>
                            <p className="m-3">{item.qty}</p>
                            <button onClick={() => dispatch(increaseQty(item._id))} className="minus-btn">+</button>
                            </div>
                        </td>
                        <td className="text-center p-4">{item.dPrice * item.qty}</td>
                        <td><button onClick={() => dispatch(removeFromCart(item._id))} className="btn-danger mt-3">X</button></td>
                    </tr>
                    )
                }
                    
                </tbody>
            </table>
            <input className="p-2" style={{ border: '2px solid orange', marginRight: '1rem', outline: 'none' }} type="text" name="coupon" id="" placeholder="coupon code" />
            <button className="m-cart-btn bg-warning text-white">Apply</button>
        </div>
    );
};

export default CartTable;