import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands/Brands';
import HomeMensContainer from '../HomeProducts/HomeMensContainer/HomeProductSContainer';
import HomeReviewsContainer from '../HomeReviews/HomeReviewsContainer/HomeReviewsContainer';
import HomeWomenProductsContainer from '../HomeWomensProducts/HomeWomensProductsContainer/HomeWomenProductsContainer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeMensContainer></HomeMensContainer>
            <HomeWomenProductsContainer></HomeWomenProductsContainer>
            <HomeReviewsContainer></HomeReviewsContainer>
            <Brands></Brands>

        </div >
    );
};

export default Home;