import React, { useEffect, useState } from 'react'
import axios from 'axios'


import useStyles from './ProductsStyles';
import Product from './product/Product';

import { useAppDispatch, useAppSelector } from '../../hooks/dispApp';

import { RootState } from '../../state/store';
import { fetchProducts } from '../../state/reducers/productSlice';



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
        dispatch(fetchProducts());
    }, [dispatch])



 
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
            {products && products.map((prod) => 
      
                 <Product product={prod} />
            )}
             </div>
        </div>
    )
}

export default Products
