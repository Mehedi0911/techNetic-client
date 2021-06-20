import React from 'react';
import './DetailsProduct.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '80%',
       height:'scrollX',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
  
}));

const DetailsProductModal = ({ open, handleClose, handleOpen }) => {
    const classes = useStyles();
    const { name, imgURL, category, tags, productDetails, price, dPrice } = useSelector((state) => state.singleProduct);

    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className="row">
                            <div className="col-md-6 mt-5 p-5 border">
                                <img style={{ height: '350px' }} src={imgURL} alt="" />
                            </div>
                            <div className="col-md-6 mt-5 p-5">
                                <h4 className="brand-text-primary">{name}</h4>
                                <div className="mb-3">
                                    reviews
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <h3>Price: {dPrice}</h3>
                                   {
                                       price &&  <h5 className="text-secondary"><span>Was: {price}</span></h5>
                                   }
                                </div>

                                <p>{productDetails}</p>
                                <div >
                                    <div className="d-flex justify-content-start align-items-center mb-3">
                                        <h5 className="qty">QTY:</h5>
                                        <div className="d-flex justify-content-between align-items-center border p-1 w-25">
                                            <button className="add-btn">-</button>
                                            <p className="mb-0">1</p>
                                            <button className="minus-btn">+</button>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mb-3">
                                        <button className="m-cart-btn"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                                        <button className="m-wishlist-btn"><FontAwesomeIcon icon={faHeart} /> Save To Wishlist</button>
                                    </div>
                                    <p className="tags">{tags}</p>
                                    <p>Category: {category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default DetailsProductModal;