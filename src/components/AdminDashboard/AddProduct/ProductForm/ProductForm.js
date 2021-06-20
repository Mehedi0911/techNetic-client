import React, { useState } from 'react';
import './ProductForm.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const ProductForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = (data, e) =>{
        e.preventDefault();

        data.date = new Date().toDateString();
        const productData = {
            name: data.name,
            price: data.price,
            dPrice: data.dPrice,
            productDetails: data.productDetails,
            imgURL: imageURL,
            uploadDate: data.date,
            tags:data.tags,
            category: data.category
        }

        //adding products to database....
        const url = 'http://localhost:5000/addProducts'

        if (imageURL !== null) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
                .then(res => {
                    console.log("server side response", res);
                })
            e.target.reset();
            setImageURL(null);
        }

        else (alert('Image is not uploaded'))
        console.log(productData);
    };

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '4da3cd17f8fcc5e9387cf9e9628b4829');
        imageData.append('image', event.target.files[0]);
        console.log(event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res.data.data.url);
                console.log('Image Uploaded', res.data.data.url);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <h5 className="mb-5">Add Products</h5>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="d-flex">
                        <div className="form-group w-100 p-3">
                            <label htmlFor="name">Product Name</label>
                            <input name="name" type="text" className="form-control mt-2" placeholder="Enter Product Name" {...register("name")}/>
                        </div>
                        <div className="form-group w-50 p-3">
                            <label htmlFor="price">Old Price</label>
                            <input name="price" type="text" className="form-control mt-2" placeholder="Enter Product Price" {...register("price")}/>
                        </div>
                        <div className="form-group w-50 p-3">
                            <label htmlFor="dPrice">New Price</label>
                            <input name="dPrice" type="text" className="form-control mt-2" placeholder="Enter New Price" {...register("dPrice")}/>
                        </div>
                    </div>
                    <div>
                        <div className="form-group w-100 p-3">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea name="productDetails" className="form-control" placeholder="product details" rows="3" {...register("productDetails")}></textarea>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div class="form-group p-3 w-25">
                            <label for="category">Category</label>
                            <select name="category" className="form-control mt-3" {...register("category")}>
                                <option>Accessories</option>
                                <option>Electronics</option>
                                <option>Gadgets</option>
                                <option>Laptop</option>
                                <option>Appliances</option>
                            </select>
                        </div>


                        <div class="form-group p-3 w-25">
                            <label for="tags">Tags</label>
                            <select name="tags" className="form-control mt-3" {...register("tags")}>
                                <option>regular</option>
                                <option>onSale</option>
                                <option>featured</option>
                                <option>topSellers</option>
                                <option>trending</option>
                                <option>newArrival</option>
                            </select>
                        </div>


                        <div class="upload-btn-wrapper">
                            <button className="upload-btn mb-3"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Image</button>
                            <input onChange={handleImageUpload} type="file" name="image" required/>
                        </div>

                    </div>
                    <div className="p-3">
                        <input className="brand-btn-regular-primary" type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;