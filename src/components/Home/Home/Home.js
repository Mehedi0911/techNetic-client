import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import HotDeals from '../HotDeals/HotDeals';
import NavBar from '../Navbar/NavigationBar';
import TopBar from '../Navbar/Topbar/TopBar';
import NewDealsCard from '../NewDealsCard/NewDealsCard';
import NewsLetter from '../NewsLetters/NewsLetter';
import Products from '../Products/Products';
import TrendingProduct from '../TrendingProducts/TrendingProduct';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Products></Products>
            <NewDealsCard></NewDealsCard>
            <HotDeals></HotDeals>
            <TrendingProduct></TrendingProduct>
            <Features></Features>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;