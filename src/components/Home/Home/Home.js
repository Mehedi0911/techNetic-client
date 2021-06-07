import React from 'react';
import Header from '../Header/Header';
import NavBar from '../Navbar/NavigationBar';
import TopBar from '../Navbar/Topbar/TopBar';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Products></Products>
        </div>
    );
};

export default Home;