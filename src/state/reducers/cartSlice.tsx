import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Dispatch} from 'react';
import axios from 'axios';

import {CartType, cartInitialStateType, CartActionType, ProductType} from '../type';


// const initialState: cartInitialStateType = {
//     // cart: {
//     //     id: null,
//     //     subtotal: null,
//     //     quantity: null,
//     //     line_items: null,
//     // }
//     carts: [],
// }

export interface CartTest extends ProductType {
    quantity: number
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartTest[],
    reducers: {
        // setCart:(state, {payload}: PayloadAction<CartType>) => ({
        //     ...state, cart: payload
        // }),
        // setCart:(state, {payload}: PayloadAction<CartType[]>) => ({
        //     const itemIndex = state.carts.findIndex(
        //         (item) => item.id === payload.id
        //     );
        //     if(itemIndex) {
        //         state.carts(itemIndex).quantity +=1
        //     } else {
        //         const tempProduct = {...payload, quantity: 1};
        //         state.cart.push(tempProduct);
        //     }
        // }),
        addToCart(state, {payload}: PayloadAction<ProductType>){
            const itemIndex = state.findIndex(
                (item) => item.id === payload.id
            );
            if(itemIndex >= 0) {
                state[itemIndex].quantity +=1
            } else {
                const tempProduct = {...payload, quantity: 1};
                state.push(tempProduct);
            }
        },
        removeFromCart: (state, {payload}: PayloadAction<ProductType>) => {
            const itemIndex = state.findIndex(item => item.id === payload.id);
            if(state[itemIndex].quantity > 1) {
                state[itemIndex].quantity -= 1;
            } else {
                //!note: immutable filter is intention within regular reducers
                return state.filter(product => product.id !== payload.id)
                // state.splice(itemIndex, 1);
            }
        }
 
    }

})

export const fetchCart = () => async (dispatch: Dispatch<CartActionType>) => {
    //
    //dispatch()
}

// export const addToCart = (product: ProductType) => async (dispatch: Dispatch<CartActionType>) => {
//     // const {data} = await axios.post(`http://localhost:3000/carts/${id}`);
//     dispatch(setCart(product));
// //   console.log(data)

// }

// export const { addToCart} = cartSlice.actions

export default cartSlice.reducer;

export const {
    addToCart,
    removeFromCart
} = cartSlice.actions