import React from 'react';
import MenuBar from './Menubar/MenuBar';
import SerachBar from './SerachBar/SerachBar';
import TopBar from './Topbar/TopBar';

const NavBar = () => {
    return (
        <div>
            <TopBar></TopBar>
            <SerachBar></SerachBar>
            <MenuBar></MenuBar>
        </div>
    );
};

export default NavBar;