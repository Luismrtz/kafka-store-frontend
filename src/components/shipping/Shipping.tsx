import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/dispApp'
import { getShippingError, getShippingInfo, setAddressInfo } from '../../state/slices/shippingSlice'
import useStyles from './ShippingStyles';

import { RouteComponentProps, withRouter, useHistory } from "react-router-dom";
import { getCartProducts } from '../../state/slices/cartSlice';


//todo call as a component for cleaner css usage
const Shipping: React.FC<RouteComponentProps<any>> = (props) => {
    // let history = useHistory();
    const classes = useStyles();
    const dispatch = useAppDispatch()
    const shippingInfo = useAppSelector(getShippingInfo);
    const shippingError = useAppSelector(getShippingError);
    const cartProductsStuff = useAppSelector(getCartProducts)
    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setCity] = useState(shippingInfo.city)
    const [state, setState] = useState(shippingInfo.state)
    //? redirect info
    // const redirect = props.location.search?props.location.search.split("=")[1]:'/';

    // useEffect(() => {
    //     dispatch(setAddressInfo(address, city, state));
    // }, [dispatch, address, city, state, props])


    console.log(address);


    console.log(cartProductsStuff)

    // const setShippingInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const setShippingInfo = (e: React.FormEvent<HTMLFormElement>) => {
    // const setShippingInfo = () => {
        e.preventDefault();
        
        dispatch(setAddressInfo(address, city, state))
        if(!shippingError ) {
          props.history.push("placeOrder");
         }
    }

    // const funbucket = () => {
    //     dispatch(setAddressInfo(address, city, state));
    //     props.history.push("placeOrder");
    // }
    //   console.log(shippingInfo && shippingInfo)


    console.log(shippingError)
    
    
    return (
        <div className={classes.wrapper}>
          
            <form onSubmit={setShippingInfo}>

            <input type="text" placeholder="Address..." value={address} onChange={(e) => setAddress(e.target.value)}/>
            <input type="text" placeholder="City..." value={city}  onChange={(e) => setCity(e.target.value)}/>
            {/* <input type="text" placeholder="City..." value={city}  onChange={(e: React.FormEvent<HTMLInputElement>) => setCity(e.currentTarget.value)}/> */}
            <input type="text" placeholder="State..." value={state} onChange={(e) => setState(e.target.value)}/>
            <button type={"submit"}>Next step</button>
            </form>
        {/* <button onClick={funbucket}>BUTT</button> */}
        {shippingError && <span>error: {shippingError}</span>}
        </div>
    )
}

export default withRouter(Shipping)
