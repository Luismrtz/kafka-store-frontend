import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { productsSlice } from './reducers/productSlice';
import { cartSlice } from './reducers/cartSlice';



export const store = configureStore({
    reducer: {
        carts: cartSlice.reducer,
        products: productsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch