import React from 'react';
import './HeaderCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HeaderCard = ({content}) => {

    const {img, title, dis, name} = content;
    return (
        <div style={{ backgroundImage: `url(${img})`}}  className="header-card row">
            
            <div  className="p-3 card-content w-100">
                <p className="mb-0 text-secondary">{title}</p>
                <h6>{name}</h6>
                <p className="mb-1">{dis}</p>
                <button className='brand-btn-text-primary'>shop now <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default HeaderCard;