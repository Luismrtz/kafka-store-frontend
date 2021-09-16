import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Dispatch} from 'react';
import axios from 'axios';

import {ProductType, productStateType, ActionType} from '../type';

const productState: productStateType = {
    products: []
}


export const productsSlice = createSlice({
    name: 'fetch/products',
    initialState: productState,
    reducers: {
        select: (state, {payload}:PayloadAction<ProductType[]>) => ({
            products: payload
        })
    }
})


export const {
    select: selectProductActionCreator
} = productsSlice.actions

export const fetchProducts = () => async (dispatch: Dispatch<ActionType>) => {
    const {data} = await axios.get(`http://localhost:3000/products`);
    dispatch(selectProductActionCreator(data));
}