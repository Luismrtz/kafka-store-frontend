import React, { useEffect, useState } from 'react'
import axios from 'axios'


import useStyles from './ProductsStyles';
import Product from './product/Product';


export type productType = {
    id: number,
    name: string,
    img: string,
    price: number,
    info: string
}

export type productTypes = {
    productAvocado: productType
}


const Products = () => {
    const classes = useStyles();
    const [prods, setProds] = useState<productType[]>([]);

    useEffect(() => {
        // must be async/await, because waiting on fetchProducts to run first
        const getProducts = async () => {
            const getFromServer = await fetchProducts();
            setProds(getFromServer);
        }
        getProducts();
  
    }, [])


    const fetchProducts = async () => {
        const {data} = await axios.get(`http://localhost:3000/products`)
        
        return data;
    }




 
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
            {prods && prods.map((prod) => 
      
                 <Product productAvocado={prod} />
            )}
             </div>
        </div>
    )
}

export default Products
