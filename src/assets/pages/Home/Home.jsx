/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import BestSelling from './BestSelling';
import Product from './Product';
import Gallery from './Gallery';
import Review from './Review';
import Offer from '../Offer/Offer';
import Counter from '../Counter/Counter';
import DynamicTittle from '../Hook/DynamicTittle.js';


const Home = () => {
    DynamicTittle('Home')
    return (
        <div className='mx-auto max-w-7xl'>
            <Banner></Banner>
            <Counter></Counter>
            <Product></Product>
            <BestSelling></BestSelling>
            <Review></Review>
            <Offer></Offer>
            <Gallery></Gallery>

        </div>
    );
};

export default Home;