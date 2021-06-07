import React from 'react';
import HeaderCard from './HeaderCard/HeaderCard';
import img1 from '../../../../Images/banner-1.9d7213c.jpg'
import img2 from '../../../../Images/banner-2.5536a5f.jpg'
import img3 from '../../../../Images/banner-3.b09cd77.jpg'
const HeaderCards = () => {
    const headerCardsContent = [
        {
            img:img1,
            title:'Top Product',
            dis:'save 20%',
            name:'Edifer Sterio Bluetooth'

        },
        {
            img:img2,
            title:'Clearance',
            dis:'save 70%',
            name:'Go Pro - Fusion 360'

        },

        {
            img:img3,
            title:'Featured',
            dis:'save $100',
            name:'Apple Watch 4'

        },

    ]
    return (
        <div >
            {
                headerCardsContent.map(content => <HeaderCard content={content}></HeaderCard>)
            }
        </div>
    );
};

export default HeaderCards;