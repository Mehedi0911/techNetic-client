import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAngleDown } from '@fortawesome/free-solid-svg-icons'
const MenuBar = () => {
    return (
        <div className="bg-light">
            <div className="container">
                <Navbar expand="lg">


                    <div className="dropdown">
                        <p className="mb-0 brand-text-primary">Browse Category <FontAwesomeIcon icon={faAngleDown} /></p>
                        <div className="dropdown-content">
                            <a href="#">USD</a>
                            <a href="#">EUR</a>

                        </div>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />



                   <div className="ml-5">
                   <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Shop</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <NavDropdown title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}

                    </Navbar.Collapse>
                   </div>




                </Navbar>
            </div>
        </div>
    );
};

export default MenuBar;