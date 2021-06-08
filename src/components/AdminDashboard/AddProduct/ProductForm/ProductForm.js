import React from 'react';
import './ProductForm.css'
const ProductForm = () => {
    return (
        <div>
            <h5 className="mb-5">Add Products</h5>
            <div>
                <form>

                    <div className="d-flex">
                        <div className="form-group w-100 p-3">
                            <label htmlFor="name">Product Name</label>
                            <input name="name" type="text" className="form-control mt-2" placeholder="Enter Product Name" />
                        </div>
                        <div className="form-group w-50 p-3">
                            <label htmlFor="price">Old Price</label>
                            <input name="price" type="text" className="form-control mt-2" placeholder="Enter Product Price" />
                        </div>
                        <div className="form-group w-50 p-3">
                            <label htmlFor="dPrice">New Price</label>
                            <input name="dPrice" type="text" className="form-control mt-2" placeholder="Enter New Price" />
                        </div>
                    </div>
                    <div>
                        <div className="form-group w-100 p-3">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea name="productDetails" className="form-control" placeholder="product details" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div class="form-group p-3 w-25">
                            <label for="category">Category</label>
                            <select name="category" className="form-control mt-3" >
                                <option>Accessories</option>
                                <option>Electronics</option>
                                <option>Gadgets</option>
                                <option>Laptop</option>
                                <option>Appliances</option>
                            </select>
                        </div>
                    
                    
                        <div class="form-group p-3 w-25">
                            <label for="tags">Tags</label>
                            <select name="tags" className="form-control mt-3" >
                                <option>Regular</option>
                                <option>On Sale</option>
                                <option>Featured</option>
                                <option>Top Sellers</option>
                                <option>Trending</option>
                                <option>New Arrival</option>
                            </select>
                        </div>
                    
                    
                        <div class="form-group p-3">
                            <label for="image">Upload Image</label> <br />
                            <input name="image" type="file" className="form-control-file mt-3" id="exampleFormControlFile1" />
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