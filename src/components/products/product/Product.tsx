import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import useStyles from './ProductStyles';


import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core'
import { productTypes } from '../Products'





const Product:FC<productTypes> = ({productAvocado}) => {
    const classes = useStyles();
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
                <CardHeader title={productAvocado.name}/>
                <CardContent>
                    {productAvocado.info}
                </CardContent>
            </Card>
        </div>
    )
}

export default Product
