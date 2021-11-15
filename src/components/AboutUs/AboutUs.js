import React from 'react';
import image from '../../images/Banner/aboutus.jpg';
import './aboutus.css';
const AboutUs = () => {
    return (
        <div className="about-us-conatiner">
            <div><img style={{ "width": "100%" }} src={image} alt="" /></div>
            <div className="about-us-content">

                <h2>Classy Watch  Store</h2>
                <p>    Welcome to Classy Watch Store We are the online watch store that you have been looking for. Our goal and mission here at Watchshopping.com is to help you find and own the perfect luxury watch. Have you been thinking of purchasing a Rolex, Omega, Tag Heuer or Seiko? Whether it will be your very first luxury watch or you’re adding to your elite collection - we offer 100% authentic luxury watches at unbelievably discounted rates. Between our prices and our authenticity guarantee, we believe that we are the Classy Watch  store around.

                </p>
            </div>
            <div className="about-us-content">
                <h2>Why Buy Luxury Watches from the Classy Watch  Store?</h2>
                <p>
                    We do our part by purchasing luxury watches directly from all around the world to make sure we are providing you the lowest cost possible, but still with the best service quality for all of our customers. We guarantee that all of our watches for sale online are authentic. Every watch is guaranteed to be from one of our 100% authorized dealers or wholesalers. Each brand new watch comes with our in-house warranty.

                    We know that finding the right watch takes time. Sometimes, too much time. That is why we are here to help! We also know that there are many other online watch stores and discount watch stores that you can shop at to help you find your dream watch, but at Watchshopping.com, we offer an unbeatable selection of mens and ladies watches, so there is something for everyone all within one stop. We strive to be the Classy Watch  store for you, carrying a huge selection of luxury watch brands including Rolex, Omega, Cartier, TAG Heuer, Tudor, Hamilton and many more.

                    Luxury watches are often associated with only “rich” people or people of status, but buying a luxury watch can be possible for anyone who has the love for exceptional timepieces. Watches, like many things, have become almost a hobby and most definitely a collector’s item for some. There is a large amount of information online about buying watches because there are constantly people who become bigger and bigger watch fans by the day. There is enough room for watch lovers from all walks of life to appreciate the art behind</p>
            </div>
        </div >
    );
};

export default AboutUs;