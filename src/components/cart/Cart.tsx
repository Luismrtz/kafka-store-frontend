import React, {useEffect} from 'react'

// import useStyles from './'

import CartItem from './cartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../../hooks/dispApp';

import { RootState } from '../../state/store';

import useStyles from './CartStyles';
// import { productsFetch } from '../../state/reducers/productSlice';

import { getCartProducts } from '../../state/reducers/cartSlice';
import { getTotalPrice } from '../../state/reducers/cartSlice';




const Cart = () => {
    const classes = useStyles();
    // const dispatch = useAppDispatch();

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

        </div>
    )
}

export default Cart
