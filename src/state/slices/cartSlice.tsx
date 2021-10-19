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

//TODO: Clean up excess types/ interfaces... CONDENSE

export interface CartTest extends ProductType {
    quantity: number
}

export type newCartTest = {
    cartTestItems: CartTest[],
    cartTotalQuantity?: number,
    cartTotalAmount?: number
}

export type thisISATest = {
    qty: number,
    prodId: number
}


const initialState: newCartTest = {
    cartTestItems: localStorage.getItem("cartTestItems")
    ? JSON.parse(localStorage.getItem("cartTestItems") || '{}')
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
        addToCart(state, action: PayloadAction<CartTest>){
            // const { id, qty } = action.payload;
            const itemIndex = state.cartTestItems.findIndex(
                (item) => item.id === action.payload.id
            );
            const stockInfo = state.cartTestItems[itemIndex]?.stock;
            const qtyInfo = state.cartTestItems[itemIndex]?.quantity;
            if(itemIndex >= 0 ) {
                // if(stockInfo > qtyInfo) {

                    state.cartTestItems[itemIndex] = {
                        ...state.cartTestItems[itemIndex],
                        //todo... add stock # to type
                        //? if stock is MORE than CURRENT quantity, then add 1
                        
                  
                        quantity: state.cartTestItems[itemIndex].quantity + ((stockInfo > qtyInfo) && (qtyInfo + action.payload.quantity <= stockInfo) ? action.payload.quantity : 0)
                    }
                    // }
            } else {
                const tempProduct = {...action.payload};
                state.cartTestItems.push(tempProduct);
            }
            localStorage.setItem("cartTestItems", JSON.stringify(state.cartTestItems))
        },
        changeToCart(state, action: PayloadAction<CartTest>){
            // const { id, qty } = action.payload;
            const itemIndex = state.cartTestItems.findIndex(
                (item) => item.id === action.payload.id
            );
            const stockInfo = state.cartTestItems[itemIndex]?.stock;
            const qtyInfo = state.cartTestItems[itemIndex]?.quantity;
            if(itemIndex >= 0 ) {
                // if(stockInfo > qtyInfo) {

                    state.cartTestItems[itemIndex] = {
                        ...state.cartTestItems[itemIndex],
                        //todo... add stock # to type
                        //? if stock is MORE than CURRENT quantity, then add 1
                        quantity: action.payload.quantity
                      
                    // }
                    }
            } else {
                const tempProduct = {...action.payload};
                state.cartTestItems.push(tempProduct);
            }
            localStorage.setItem("cartTestItems", JSON.stringify(state.cartTestItems))
        },

        // getTotals(state) {
        //     let {total, totalQuantity} = state.cartTestItems.reduce(
        //         //acc, next
        //         (cartTotal, cartItem) => {
        //             const { price, quantity } = cartItem;
        //             const itemTotal = price * quantity;

        //             cartTotal.total += itemTotal;
        //             cartTotal.totalQuantity += quantity;

        //             return cartTotal;
        //         },
        //         {
        //             total: 0,
        //             totalQuantity: 0
        //         }
        //     );
        //     total = parseFloat(total.toFixed(2));
        //     state.cartTotalQuantity = totalQuantity;
        //     state.cartTotalAmount = total;
        // },
    //!note: pass in NUMBER as type if only want to pass ID as an argument -> to parameter.
    //!note: pass in <ProductType> if want to pass in AKK OBJECT types besides quantity.
    //!note: passing in <CartTest> breaks, because of type quantity
    //*: CREATE A cart folder for UI. CHECK!
    //TODO:  ADD ERROR handling WHEREVER is NEEDED -- REDUCERS &&& CART HTML UI
    //TODO: Make a spinner? 
    //TODO: OR add TOAST package with REDUCER error handling

    //*: Include Add / remove feature separately???? CHECK!
    //*: Add a drop list for quantity / change CHECK!
    //Todo: Change that to a input field 
    //Todo: Push info and grab total amount / total quantity
    //Todo: From inital state (currently not being used)
        removeFromCart(state, {payload}: PayloadAction<number>) {
            const itemIndex = state.cartTestItems.findIndex(item => item.id === payload);
            if(state.cartTestItems[itemIndex].quantity > 1) {
                state.cartTestItems[itemIndex].quantity -= 1;
            } else {
                //!note: immutable filter is intention within regular reducers.... FALSE!!...
                //? ... made it MUTable to work.... mutability just kinda works better in ALL reducers w/ TS
                // return state.cartTestItems.filter(product => product.id !== payload.id)
                state.cartTestItems.splice(itemIndex, 1);
            }
            localStorage.setItem("cartTestItems", JSON.stringify(state.cartTestItems))
        }
 
    }

})

export const setCart = (prod: ProductType, quantity: number) => async (dispatch: Dispatch<CartActionType>) => {

    const apples = { ...prod, quantity}
    dispatch(addToCart(apples))
  

}

export const setChange = (prod: ProductType, quantity: number) => async (dispatch: Dispatch<CartActionType>) => {

    const apples = { ...prod, quantity}
    dispatch(changeToCart(apples))
  

}


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

export const getCartProducts = (state: RootState) => state.carts.cartTestItems;
export const getTotalPrice = (state: RootState) => state.carts.cartTestItems.reduce((acc, next) => acc += (next.quantity * next.price),0)

export default cartSlice.reducer;

export const {
    addToCart,
    changeToCart,
    removeFromCart,
    // getTotals
} = cartSlice.actions