import React, { useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from "react-router-dom";

import { useAppDispatch, useAppSelector } from '../../hooks/dispApp'
import { getShippingInfo } from '../../state/slices/shippingSlice'
// import { getCartProducts } from '../../state/slices/cartSlice';
import useStyles from './OrderCallStyles';
import{ cartsContainerType, createOrder, fetchOrder, getPlacedOrder, orderSlice } from '../../state/slices/orderSlice';


//todo params id to ORDER page. 

const OrderCall:  React.FC<RouteComponentProps<any>> = (props) => {
    const classes = useStyles();
    const dispatch = useAppDispatch()
    const orderId = props.match.params.id
    const shippingInfo = useAppSelector(getShippingInfo);
    // const cartProducts = useAppSelector(getCartProducts);
   
    const {cartsContainer, loading, error, } = useAppSelector(getPlacedOrder);


    console.log(shippingInfo)


    // if(!userInfo) {
    //     props.history.push('/signin');
    // }
    // if(userInfo && !cart.cartItems.length) {
    //     props.history.push('/cart');
    // }
    // if(userInfo && !shipping.address) {
    //     props.history.push('/shipping');
    // }
    // if(userInfo && !payment) {
    //     props.history.push('payment');
    // }
 
    // if(!cartsContainer?.cartProducts) {
    //     props.history.push('/');
    //     // props.history.push('/cart');
    // }
    // if(!cartsContainer?.shippingInfo) {
    //     props.history.push('/cart');
    // }
    // if(!payment) {
    //     props.history.push('payment');
    // }




    
    console.log(orderId);


    useEffect(() => {
        if(!cartsContainer) {

            dispatch(fetchOrder(orderId))
            
        }

    // }, [dispatch,props.history, order, success]);
    }, [dispatch, cartsContainer, orderId]);
    


    const payOrderHandler = () => {
        // dispatch(createOrder({shippingInfo, cartProducts}))
        console.log('offially paid')
    }
   
    return (
        <div className={classes.wrapper}>
            <h1>shipping info</h1>
            <div>{cartsContainer?.shippingInfo.address}</div>
            <div>{cartsContainer?.shippingInfo.city}</div>
            <div></div>
            <h1>cart info</h1>
            {cartsContainer?.cartProducts && cartsContainer?.cartProducts.map((cart) => (

                <div>
                    <div>
                        {cart.name}
                    </div>
                    <div>
                        {cart.price}
                    </div>
                    <div>
                        {cart.quantity}
                    </div>
                    
                </div>
            ))}
            <button onClick={payOrderHandler}>CONFIRM PAYMENT</button>
        </div>
    )
}

export default withRouter(OrderCall)
