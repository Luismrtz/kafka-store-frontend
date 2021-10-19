import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Dispatch} from 'react';
import axios from 'axios';
import { CartTest } from './cartSlice';
import { shippingType } from './shippingSlice';
import { RootState } from '../store';




// export type moreTesting = {
//     cartTestItems: CartTest[],
//     shipInfo: shippingType
// }




// export type orderTesting = {
//     cartsContainer: moreTesting
// }


export type cartsContainerType = {
    cartProducts: CartTest[],
    id: number,
    shippingInfo: shippingType,
}


 type initialStateType = {
    cartsContainer: cartsContainerType | null,
    loading: string,
    error: string | null
    
}


const initialState: initialStateType = {
    cartsContainer: null,
    loading: 'idle',
    error: ''
}


// export const setCreateOrder = (shippingInfo: any, cartProducts: any ) => async (dispatch: Dispatch<OrderActionType>) => {
    
//     const post = { shippingInfo, cartProducts }
//     console.log(post)
//     dispatch(createOrder(post))
  

// }


export const createOrder = createAsyncThunk(
    "carts/order",
    async ({shippingInfo, cartProducts} : {shippingInfo: shippingType, cartProducts:CartTest[] }, { rejectWithValue }) => {

        try {
        //   const response = await fetch(
        //     `http://localhost:3000/carts`,
        //     {
        //       method: 'POST',
        //       body: JSON.stringify({shippingInfo, cartProducts}),
        //     //   header: {
        //     //     'Content-Type': 'application/json',
        //     //   },
        //     }
        //   )
        //   const data = await response.json()
        //   return data
        const response = await axios.post("http://localhost:3000/carts", {
            shippingInfo: shippingInfo,
            cartProducts: cartProducts
        })
        return response.data;
        } catch (error) {
            return rejectWithValue('oops')
        }
    }
)
export const fetchOrder = createAsyncThunk(
    "carts/orderFetch",
    async (orderId: number, { rejectWithValue }) => {

        try {
        const response = await axios.get(`http://localhost:3000/carts/${orderId}` )
        return response.data;
        } catch (error) {
            return rejectWithValue('oops')
        }
    }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        // createOrder(state, action: PayloadAction<>) {

        // }
        reset(state) {
            Object.assign(state, initialState)
        }
        // reset: state => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(createOrder.pending, (state) => {
            // At that moment,
            // we change status to `loading` 
            // and clear all the previous errors:
            state.loading = "pending";
            state.error = null;
          });
        builder.addCase(createOrder.fulfilled, (state, {payload}) => {
            state.cartsContainer = payload;
            state.loading = 'succeeded'
            
        })
        builder.addCase(createOrder.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = JSON.stringify(action.error);
        });





        builder.addCase(fetchOrder.pending, (state) => {
    
            state.loading = "pending";
            state.error = null;
          });

        builder.addCase(fetchOrder.rejected, 
            (state, { payload }) => {
       
            state.loading = "failed";
          });
        builder.addCase(fetchOrder.fulfilled, (state, {payload}) => {
            state.cartsContainer = payload;
        })
    }
})
// export type OrderActionType = ReturnType<typeof createOrder>
export const getPlacedOrder = (state: RootState) => state.order;

// export default orderSlice;


export const orderCreateReducers = {
    
    ...orderSlice,
    createOrder,
    fetchOrder
} 
