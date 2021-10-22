import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Dispatch} from 'react';
import { RootState } from '../store';


export type shippingType = {
    address: string,
    city: string,
    state: string,
}

type initialStateType = {
    shipInfo: shippingType,
    status: string | null
}

const initialState: initialStateType = {
   
    shipInfo: sessionStorage.getItem("shippingTestAddress")
    ? JSON.parse(sessionStorage.getItem("shippingTestAddress") || '')
    : '',
    status: ''
   
}


export const selectAddressSlice = createSlice({
    name: 'addressData',
    initialState,
    reducers: {
        addShippingInfo(state, {payload}: PayloadAction<shippingType>) {
          
            sessionStorage.setItem("shippingTestAddress", JSON.stringify(payload))
            state.shipInfo = payload
        },
        errorShippingInfo(state, {payload}) {
            
            // sessionStorage.setItem("shippingTestAddress", JSON.stringify(payload))
            state.status = payload
        }
    }
})


export const setAddressInfo = (address: string, city: string, state: string) => async (dispatch: Dispatch<ShippingActionType>) => {
    
    try{
        // if(address !== '' && city !== '' && state !== '') {
   
        if (!address || !city || !state) {
            const poopy = `not all fields are filled out`
            dispatch(errorShippingInfo(poopy))
            return;
            
        }
        if (address.length <= 4) {
            const poopy = `address needs to be more than 4 characters`
            dispatch(errorShippingInfo(poopy))
            return;
            
        }

        if((address && address !== '') && (city && city !== '') && (state && state !== '') ) {

            const doop = { address, city, state}
            console.log(doop)
            dispatch(addShippingInfo(doop))
            return;
        }
    }catch (error){
        console.log(error)
        
  }

}


export const getShippingInfo = (state: RootState) => state.shipping.shipInfo;
export const getShippingError = (state: RootState) => state.shipping.status;

// export default selectAddressSlice.reducer;

export const {
    addShippingInfo,
    errorShippingInfo
} = selectAddressSlice.actions

export type ShippingActionType = ReturnType<typeof addShippingInfo>