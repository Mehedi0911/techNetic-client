import React from 'react';
import SerachBar from './SerachBar/SerachBar';
import TopBar from './Topbar/TopBar';

const NavBar = () => {
    return (
        <div>
            <TopBar></TopBar>
            <SerachBar></SerachBar>
        </div>
    );
};

export default NavBar;