import React, { useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from "react-router-dom";

import { useAppDispatch, useAppSelector } from '../../hooks/dispApp'
import { getShippingInfo } from '../../state/slices/shippingSlice'
import { getCartProducts } from '../../state/slices/cartSlice';
import useStyles from './PlaceOrderStyles';
import{ cartsContainerType, createOrder, getPlacedOrder, orderSlice } from '../../state/slices/orderSlice';


//todo params id to ORDER page. 

const PlaceOrder:  React.FC<RouteComponentProps<any>> = (props) => {
    const classes = useStyles();
    const dispatch = useAppDispatch()
    const shippingInfo = useAppSelector(getShippingInfo);
    const cartProducts = useAppSelector(getCartProducts);
    const {cartsContainer, loading, error } = useAppSelector(getPlacedOrder);

    


console.log(shippingInfo)
console.log(cartsContainer?.shippingInfo);


// const location = useLocation()

// useEffect(() => {
//   fetchData()
// }, [location.key])

    useEffect(() => {
        // if(!JSON.stringify(shippingInfo.address) || !JSON.stringify(shippingInfo.city) || !JSON.stringify(shippingInfo.state) || JSON.stringify(shippingInfo) === '{}') {
        if(!shippingInfo) {

            props.history.push('/shipping');
        }
        // if(!cartsContainer?.cartProducts) {
        //     props.history.push('/');
        //     // props.history.push('/cart');
        // }
 
        if(loading === 'succeeded') {
            props.history.push('/order/' + cartsContainer?.id);
            // dispatch({type: ORDER_CREATE_RESET})
            dispatch(orderSlice.actions.reset())
            
        }

    // }, [dispatch,props.history, order, success]);
    }, [dispatch, loading, props, cartsContainer, shippingInfo]);
    


    const placeOrderHandler = () => {
        dispatch(createOrder({shippingInfo, cartProducts}))
    }
   
    return (
        <div className={classes.wrapper}>
            <h1>shipping info</h1>
            <div>{shippingInfo.address}</div>
            <div>{shippingInfo.city}</div>
            <div></div>
            <h1>cart info</h1>
            {cartProducts && cartProducts.map((cart) => (

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
            <button onClick={placeOrderHandler}>press to create order</button>
        </div>
    )
}

export default withRouter(PlaceOrder)
