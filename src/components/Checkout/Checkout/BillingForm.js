import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveBillingInfo } from '../../../redux/actions/cartActions';

const BillingForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let history = useHistory();
    const dispatch = useDispatch()
    const onSubmit = (data, e) =>{
        e.preventDefault();
        dispatch(saveBillingInfo(data))
        history.push('/payment')
    }

  
    return (
        <div className="form-data pb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex">
                <div className="form-group w-100 p-3">
                    <label htmlFor="firstName">First Name*</label>
                    <input name="firstName" type="text" className="form-control mt-2" placeholder="First Name" {...register("firstName")} required/>
                </div>
                <div className="form-group w-100 p-3">
                    <label htmlFor="lastName">Last Name*</label>
                    <input name="lastName" type="text" className="form-control mt-2" placeholder="Last Name" {...register("lastName")} required/>
                </div>

            </div>
            <div className="form-group w-100 p-3">
                <label htmlFor="email">Email Address*</label>
                <input name="email" type="email" className="form-control mt-2" placeholder="Email" {...register("email")} required/>
            </div>
            <div className="form-group w-100 p-3">
                <label htmlFor="address">Address*</label>
                <input name="address" type="text" className="form-control mt-2" placeholder="Enter Full Address" {...register("address")} required/>
            </div>
            <div className="d-flex">
                <div className="form-group w-100 p-3">
                    <label htmlFor="country">Country*</label>
                    <input name="country" type="text" className="form-control mt-2" placeholder="country" {...register("country")} required/>
                </div>
                <div className="form-group w-100 p-3">
                    <label htmlFor="state">State*</label>
                    <input name="state" type="text" className="form-control mt-2" placeholder="state" {...register("state")} required/>
                </div>
                <div className="form-group w-100 p-3">
                    <label htmlFor="city">City*</label>
                    <input name="city" type="text" className="form-control mt-2" placeholder="city" {...register("city")} required/>
                </div>

            </div>
            <div className="d-flex">
                <div className="form-group w-100 p-3">
                    <label htmlFor="zip">Zip Code*</label>
                    <input name="zip" type="text" className="form-control mt-2" placeholder="zip code" {...register("zip")} required/>
                </div>
                <div className="form-group w-100 p-3">
                    <label htmlFor="phone">Phone*</label>
                    <input name="phone" type="text" className="form-control mt-2" placeholder="phone" {...register("phone")} required/>
                </div>
            </div>
            <div>
                <div className="form-group w-100 p-3">
                    <label htmlFor="orderNotes">Order Notes</label>
                    <textarea name="orderNotes" className="form-control mt-2" placeholder="order notes" rows="3" {...register("orderNotes")} ></textarea>
                </div>
            </div>
            <input style={{float:'right', marginRight:'1rem'}} className="brand-btn-regular-primary" type="submit" value="Proceed To Payment" />
        </form>
    </div>
    );
};

export default BillingForm;