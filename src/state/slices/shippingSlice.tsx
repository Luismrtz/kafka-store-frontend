import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Dispatch} from 'react';
import { RootState } from '../store';


export type shippingType = {
    address: string,
    city: string,
    state: string,
}

type initialStateType = {
    shipInfo: shippingType 
}

const initialState: initialStateType = {
   
    shipInfo: localStorage.getItem("shippingTestAddress")
    ? JSON.parse(localStorage.getItem("shippingTestAddress") || '')
    : '',
   
}


export const selectAddressSlice = createSlice({
    name: 'addressData',
    initialState,
    reducers: {
        addShippingInfo(state, action: PayloadAction<shippingType>) {
            localStorage.setItem("shippingTestAddress", JSON.stringify(action.payload))
            console.log(action.payload)
            console.log(state)
        }
    }
})


export const setAddressInfo = (address: string, city: string, state: string) => async (dispatch: Dispatch<ShippingActionType>) => {
    
    const doop = { address, city, state}
    console.log(doop)
    dispatch(addShippingInfo(doop))
  

}


export const getShippingInfo = (state: RootState) => state.shipping.shipInfo;

// export default selectAddressSlice.reducer;

export const {
    addShippingInfo,
} = selectAddressSlice.actions

export type ShippingActionType = ReturnType<typeof addShippingInfo>