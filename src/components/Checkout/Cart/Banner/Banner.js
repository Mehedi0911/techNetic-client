import React from 'react';
import './Banner.css'
const Banner = ({title, description}) => {
    return (

        <div className="banner d-flex justify-content-center align-items-center">
            <div className="banner-content text-center">
                <h4 className="brand-text-primary">{title}</h4>
                <p className="text-white">{description}</p>
            </div>
        </div>

    );
};

export default Banner;