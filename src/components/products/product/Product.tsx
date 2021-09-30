import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import useStyles from './ProductStyles';


import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core'
// import { productTypes } from '../Products'

import { ProductType } from '../../../state/type';
import { useAppDispatch } from '../../../hooks/dispApp';
import { productsDelete } from '../../../state/reducers/productSlice';
// import { productsFetch } from '../../../state/reducers/productSlice';
import { addToCart, removeFromCart } from '../../../state/reducers/cartSlice';
// import { useAppDispatch } from '../../../hooks/dispApp';


//? setting the PASSED product to same as ProductType type.
type Props = {
    product: ProductType
}



const Product:FC<Props> = ({product}) => {
    const dispatch = useAppDispatch()
    const classes = useStyles();
    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         // const res = await fetch(
    //         //     `http://localhost:3000/products`,
    //         // )
    //         // const data = await res.json()
    //         // console.log(data)


    //         const {data} = await axios({
    //             method: 'get',
    //             url: `http://localhost:3000/products`,
    //         })
       
    //         console.log(data)
    //     }
    //     fetchProducts()
  
    // }, [])





    return (
        <div>
            <Card className={classes.root}>
                    {/* {productAvocado.name} */}
    
                {/* <CardMedia/> */}
                <CardHeader title={product.name}/>
                <CardContent>
                    {product.info}
                </CardContent>
            <div onClick={() => dispatch(productsDelete(product.id))}>POOOOOOP</div>
            <div onClick={() => dispatch(addToCart(product))}>ADD TO CART</div>
            <div onClick={() => dispatch(removeFromCart(product))}>REMOVE FROM CART</div>
            </Card>
        </div>
    )
}

export default Product
