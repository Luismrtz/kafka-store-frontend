import React, { useEffect, useState } from 'react'
import axios from 'axios'


import useStyles from './ProductsStyles';
import Product from './product/Product';

import { useAppDispatch, useAppSelector } from '../../hooks/dispApp';

import { RootState } from '../../state/store';
import { productsFetch } from '../../state/reducers/productSlice';

//! test, MOVE to Cart folder. 
import { getCartProducts } from '../../state/reducers/cartSlice';
// import { getTotalPrice } from '../../state/reducers/cartSlice';


// export type productType = {
//     id: number,
//     name: string,
//     img: string,
//     price: number,
//     info: string
// }

// export type productTypes = {
//     productAvocado: productType
// }


const Products = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state: RootState) => state.products);
    // const [prods, setProds] = useState<productType[]>([]);

    //!test move to Cart folder
    // const cartProducts = useAppSelector(getCartProducts);
    // const totalPrice = useAppSelector(getTotalPrice);



    // useEffect(() => {
    //     // must be async/await, because waiting on fetchProducts to run first
    //     const getProducts = async () => {
    //         const getFromServer = await fetchProducts();
    //         setProds(getFromServer);
    //     }
    //     getProducts();
  
    // }, [])


    // const fetchProducts = async () => {
    //     const {data} = await axios.get(`http://localhost:3000/products`)
        
    //     return data;
    // }

    useEffect(() => {
        dispatch(productsFetch());
    }, [dispatch])



 
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
            {products && products.map((prod) => 
      
                 <Product aType={2} product={prod} />
            )}
             </div>
             {/* //! Test: move to cart folder */}
      
             
        </div>
    )
}

export default Products
