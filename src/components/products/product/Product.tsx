import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import useStyles from './ProductStyles';


import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core'
// import { productTypes } from '../Products'

import { ProductType } from '../../../state/type';
// import { useAppDispatch } from '../../../hooks/dispApp';


//? setting the PASSED product to same as ProductType type.
type Props = {
    product: ProductType
}



const Product:FC<Props> = ({product}) => {
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
            </Card>
        </div>
    )
}

export default Product
