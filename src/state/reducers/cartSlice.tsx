import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Dispatch} from 'react';
import axios from 'axios';

import {
    // CartType,
    //  cartInitialStateType, 
     CartActionType, ProductType, productStateType} from '../type';
import { RootState } from '../store';


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

export type newCartTest = {
    cartItems: CartTest[],
    cartTotalQuantity?: number,
    cartTotalAmount?: number
}

const initialState: newCartTest = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") || '{}')
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
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
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === payload.id
            );
            if(itemIndex >= 0) {
                state.cartItems[itemIndex] = {
                    ...state.cartItems[itemIndex],
                    quantity: state.cartItems[itemIndex].quantity + 1
                }
            } else {
                const tempProduct = {...payload, quantity: 1};
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
    //!note: pass in NUMBER as type if only want to pass ID as an argument -> to parameter.
    //!note: pass in <ProductType> if want to pass in AKK OBJECT types besides quantity.
    //!note: passing in <CartTest> breaks, because of type quantity
    //TODO: CREATE A cart folder for UI.
    //TODO:  ADD ERROR handling WHEREVER is NEEDED -- REDUCERS &&& CART HTML UI
    //TODO: Make a spinner? 
    //TODO: OR add TOAST package with REDUCER error handling
        removeFromCart(state, {payload}: PayloadAction<number>) {
            const itemIndex = state.cartItems.findIndex(item => item.id === payload);
            if(state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            } else {
                //!note: immutable filter is intention within regular reducers.... FALSE!!...
                //? ... made it MUTable to work.... mutability just kinda works better in ALL reducers w/ TS
                // return state.cartItems.filter(product => product.id !== payload.id)
                state.cartItems.splice(itemIndex, 1);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
 
    }

})

// export const fetchCart = () => async (dispatch: Dispatch<CartActionType>) => {
//     //
//     //dispatch()
// }

// export const addToCart = (product: ProductType) => async (dispatch: Dispatch<CartActionType>) => {
//     // const {data} = await axios.post(`http://localhost:3000/carts/${id}`);
//     dispatch(setCart(product));
// //   console.log(data)

// }

// export const { addToCart} = cartSlice.actions

export const getCartProducts = (state: RootState) => state.carts.cartItems;
export const getTotalPrice = (state: RootState) => state.carts.cartItems.reduce((acc, next) => acc += (next.quantity * next.price),0)

export default cartSlice.reducer;

export const {
    addToCart,
    removeFromCart
} = cartSlice.actions