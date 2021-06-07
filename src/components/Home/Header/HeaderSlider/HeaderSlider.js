import React from 'react';
import './HeaderSlider.css'
import bgOne from '../../../../Images/slide-1.jpg'
import bgTwo from '../../../../Images/slide-2.jpg'
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const HeaderSlider = () => {
    return (
        <div>
            <Carousel>

                <Carousel.Item>
                    
                    <img
                        className="d-block w-100"
                        src={bgOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <div className="carousel-content">
                            <p className="brand-text-primary">Daily Hot Deals</p>
                            <h2 className="text-secondary">First slide label</h2>
                            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p className="text-secondary">Today: <span className="brand-text-primary" style={{fontSize:'3rem', fontWeight:'600'}}>$ 355 only</span></p>
                            <button className="brand-btn-regular-primary">Shop Now  <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>

                    </Carousel.Caption>
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bgTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel-content">
                        <p className="brand-text-primary">Daily Hot Deals</p>
                            <h2 className="text-secondary">Second slide label</h2>
                            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p className="text-secondary">Today: <span className="brand-text-primary" style={{fontSize:'3rem', fontWeight:'600'}}>$ 355 only</span></p>
                            <button className="brand-btn-regular-primary">Shop Now  <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default HeaderSlider;