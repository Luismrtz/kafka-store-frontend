import React, { Component } from 'react'


import {Products, Banner} from '../components';
import Cart from '../components/cart/Cart';
// import { routes } from '../config/router';

//Todo TEST 123 test-branch


const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Cart/>
        </div>
    )
}

export default Home
