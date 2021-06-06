import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAngleDown, faBars, faTags } from '@fortawesome/free-solid-svg-icons'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import burgerMenu from '../../../../Images/Icons/bargerMenu.svg'
import './MenuBar.css'
const MenuBar = () => {
    return (
        <Navbar expand="lg" className="shadow-sm">
            <Container className="d-flex">
                <div style={{ width: '500px' }}>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav"><img style={{ height: '30px' }} src={burgerMenu} alt="" /></Navbar.Toggle>
                    
                    
                        <Navbar.Collapse id="basic-navbar-nav" className="">

                            <Nav className="">
                                <div className="dropdown">
                                    <p className="mt-2 brand-text-primary">
                                        <FontAwesomeIcon style={{marginRight:'10px'}} icon={faBars} />
                                        Browse Categories
                                        <FontAwesomeIcon style={{marginLeft:'7px'}} icon={faAngleDown} />
                                    </p>
                                    <div className="dropdown-content">
                                        <a href="#">Cameras</a>
                                        <a href="#">Laptops</a>
                                        <a href="#">Mobiles</a>
                                        <a href="#">Accessories</a>
                                        <a href="#">Watches</a>
                                        <a href="#">Others</a>
                                    </div>
                                </div>
                                <p style={{marginRight:'13px', marginLeft:'30px', marginTop:'10px'}}>Home</p>
                                <p style={{marginRight:'13px',marginTop:'10px'}}>Shop</p>
                                <p style={{marginRight:'13px',marginTop:'10px'}}>Products</p>
                                <p style={{marginRight:'13px',marginTop:'10px'}}>Blog</p>

                            </Nav>

                        </Navbar.Collapse>
                    </div>
                
                
                    <p className="brand-text-primary mt-2"><FontAwesomeIcon style={{marginLeft:'7px'}} icon={faTags} /> Flat 50% Discount</p>
                
            </Container>
        </Navbar>
    )


};

export default MenuBar;