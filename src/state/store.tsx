import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { productsSlice } from './slices/productSlice';
import { cartSlice } from './slices/cartSlice';
import { selectAddressSlice } from './slices/shippingSlice';
import {orderCreateReducers} from './slices/orderSlice';


// const localShipping = localStorage.getItem("shippingTestAddress")
// ? JSON.parse(localStorage.getItem("shippingTestAddress") || '{}')
// : {};
// const initialState = {
//     cart: { 
//         localShipping
//     },
//     // userSignIn
// }

export const store = configureStore({
    reducer: {
        carts: cartSlice.reducer,
        products: productsSlice.reducer,
        shipping: selectAddressSlice.reducer,
        order: orderCreateReducers.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export const getPlaceOrderInfo = (state: RootState) => state.s;


