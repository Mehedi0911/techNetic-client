import React from 'react';
import HeaderCards from './HeaderCards/HeaderCards';
import HeaderSlider from './HeaderSlider/HeaderSlider';

const Header = () => {
    return (
        <div className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <HeaderSlider></HeaderSlider>
                    </div>
                    <div className="col-md-4 ">
                        <HeaderCards></HeaderCards>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;