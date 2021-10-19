import React, {useEffect} from 'react'

// import useStyles from './'

import CartItem from './cartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../../hooks/dispApp';

import { RootState } from '../../state/store';
import { RouteComponentProps, withRouter } from "react-router-dom";

import useStyles from './CartStyles';
// import { productsFetch } from '../../state/reducers/productSlice';

import { getCartProducts } from '../../state/slices/cartSlice';
import { getTotalPrice } from '../../state/slices/cartSlice';




const Cart: React.FC<RouteComponentProps<any>> = (props) => {
    const classes = useStyles();
    // const dispatch = useAppDispatch();
    
    const checkoutHandler = () => {
        //todo to redirect to signin if no userInfo is detected. 
        // props.history.push("/signin?redirect=shipping");
        //todo temporary
        props.history.push("/shipping");
    }


    const cartProducts = useAppSelector(getCartProducts);
    const totalPrice = useAppSelector(getTotalPrice);
    const cartTotal = parseFloat(totalPrice.toFixed(2));
    return (
        <div>
                   <h2>total Price: {cartTotal}</h2>
             <h2># of items in cart: {cartProducts.length}</h2>


             <div className={classes.wrapper}>
            {cartProducts && cartProducts.map((info) => 
      
                 <CartItem  cartInfo={info} />
            )}
             </div>
             <button onClick={checkoutHandler}>Checkout</button>

        </div>
    )
}

export default withRouter(Cart);
