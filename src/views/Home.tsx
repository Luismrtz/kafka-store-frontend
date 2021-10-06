import React, { Component } from 'react'


import {Products, Banner} from '../components';
import Cart from '../components/cart/Cart';
// import { routes } from '../config/router';



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
