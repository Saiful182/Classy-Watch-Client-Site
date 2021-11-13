import React from 'react';
import Banner from '../Banner/Banner';
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
        </div >
    );
};

export default Home;