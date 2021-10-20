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
   
    shipInfo: sessionStorage.getItem("shippingTestAddress")
    ? JSON.parse(sessionStorage.getItem("shippingTestAddress") || '')
    : '',
   
}


export const selectAddressSlice = createSlice({
    name: 'addressData',
    initialState,
    reducers: {
        addShippingInfo(state, action: PayloadAction<shippingType>) {
            sessionStorage.setItem("shippingTestAddress", JSON.stringify(action.payload))
            state.shipInfo = action.payload
        }
    }
})


export const setAddressInfo = (address: string, city: string, state: string) => async (dispatch: Dispatch<ShippingActionType>) => {
    
    try{
        if(address !== '' && city !== '' && state !== '') {

            const doop = { address, city, state}
            console.log(doop)
            dispatch(addShippingInfo(doop))
        }
    }catch (error){
        console.log(error)
  }

}


export const getShippingInfo = (state: RootState) => state.shipping.shipInfo;

// export default selectAddressSlice.reducer;

export const {
    addShippingInfo,
} = selectAddressSlice.actions

export type ShippingActionType = ReturnType<typeof addShippingInfo>