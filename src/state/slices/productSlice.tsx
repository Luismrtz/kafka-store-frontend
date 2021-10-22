import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Dispatch} from 'react';
import axios from 'axios';
import { AxiosError } from 'axios'

import {ProductType, productStateType, ActionType} from '../type';
import { RootState } from '../store';


// interface ValidationErrors {
//   errorMessage: string
//   field_errors: Record<string, string>
// }

const productState: productStateType = {
    products: [],
    loading: 'idle',
    error: ''
}

// type FetchTodosError = {
//     message: string;
//   };
  
//   export const fetchTodos = createAsyncThunk<
//     Todo[],
//     number,
//     { rejectValue: FetchTodosError }
//   >(
//     "todos/fetch", 
  
//     async (limit: number, thunkApi) => {
//       const response = await fetch(/*...*/);
      
//       // Check if status is not okay:
//       if (response.status !== 200) {
//         // Return the error message:
//         return thunkApi.rejectWithValue({ 
//           message: "Failed to fetch todos." 
//         });
//       }
      
//       return data;
//     }
//   );


// interface UsersState {
//     entities: []
//     loading: 'idle' | 'pending' | 'succeeded' | 'failed'
//   }


export const productsFetch = createAsyncThunk<ProductType[]>(
    "products/productsFetch",
    //todo _, is a placehold that allows "rejectWithValue" to pass w/o needed to pass data
    async ( _, { rejectWithValue }) => {
      //todo dont think I need a try/catch if using extraReducers
      // try {
        const response = await axios.get(
            `http://localhost:3000/roducts`
        );
        return response.data;
        //*alternative: bouncing error with custom comment
    //   } catch (err) {
  
    //     console.log(err)
    //     return rejectWithValue('puppies: get request failed')
    // }
    }
  );

  export const productsDelete = createAsyncThunk(
    "products/productsDelete",
    async (productId: number) => {
      try {
        await axios({
            method: 'DELETE',
            url: `http://localhost:3000/products/${productId}`
        })
        return productId;
      } catch (error) {
        console.log(error);
      }
    }
  );

//   const commentsAdapter = createEntityAdapter<number>({
//       selectId: (product) => product.id
//   })

// export const selectStatus = (state: RootState) =>
//   state.todos.status;

export const productsSlice = createSlice({
    name: 'fetch/products',
    initialState: productState,
    reducers: {
        // select: (state, {payload}:PayloadAction<ProductType[]>) => ({
        //     products: payload
        // }),
        // removeTheProduct: (state, {payload}: PayloadAction<ProductType[]>) => {

        //   return  state.products.filter(product => product.id !== payload)
        // }
    },
    extraReducers: (builder) => {

        builder.addCase(productsFetch.pending, (state) => {
            // At that moment,
            // we change status to `loading` 
            // and clear all the previous errors:
            state.loading = "pending";
            state.error = '';
          });

          builder.addCase(productsFetch.rejected, 
            (state, action) => {
            // We show the error message
            // and change `status` back to `idle` again.
            // if (payload) state.error = payload.message;
            state.loading = "failed";



            //  if(action.error.message) {
              //    state.error = action.error.message;
              //   }
              
              //* checks if rejectedWithValue() was used. (custom message)

         if(action.payload) {
          //  state.error = action.payload;
          state.error = JSON.stringify(action.payload) 
          } else {
            state.error = action.error.message;
          }
          // console.log(action.payload)
          // console.log(action.error.message)

          // if(action.payload) {
          //   //  state.error = action.error.message;
          //    state.error = action.payload;
          //   } else {
          //         state.error = action.error.message;
          //   }
          // console.log(action.payload)

        
  
          });

        builder.addCase(productsFetch.fulfilled, (state, { payload }) => {
            state.products = payload;
            state.loading = 'succeeded';
            state.error = '';
          
          },
          
        )
      

 
        
        builder.addCase(productsDelete.fulfilled, (state, { payload }) => {
            // state.products.filter(product => product.id !== payload);
            // commentsAdapter.removeOne(state, payload)
            //! note: mutation is intentional when using createAsyncThunk/extraReducers
            let index = state.products.findIndex((test) => test.id === payload);
            state.products.splice(index, 1);
            console.log(state.products)
            state.loading = 'succeeded';
          },
        )

   
        },
    
    // extraReducers: {
    //     [productsFetch.fulfilled]: (state, {payload}) = {
    //         state.products = payload;
    //         state.loading = 'succeeded'
    //     }
    }
)



// export const getProductError = (state: RootState) => state.products;

export default productsSlice;
    // select: selectProductActionCreator,
    // removeTheProduct: deleteProductActionCreator,
    // productsFetch.fulfilled,
 

// export const fetchProducts = () => async (dispatch: Dispatch<ActionType>) => {
//     const {data} = await axios.get(`http://localhost:3000/products`);
//     dispatch(selectProductActionCreator(data));
// }


// export const deleteProducts = (prodId: number) => async (dispatch: Dispatch<ActionType>) => {
//     // const {data} = await axios.get(`http://localhost:3000/products`);
//     const {data} = await axios({
//         method: 'DELETE',
//         url: `http://localhost:3000/products/${prodId}`
//     })
    
    
//     dispatch(deleteProductActionCreator(prodId));
// }