import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import useStyles from './ProductStyles';


import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core'
// import { productTypes } from '../Products'

import { ProductType } from '../../../state/type';
import { useAppDispatch } from '../../../hooks/dispApp';
import { productsDelete } from '../../../state/reducers/productSlice';
// import { productsFetch } from '../../../state/reducers/productSlice';
import { addToCart, CartTest, removeFromCart, setCart, setChange } from '../../../state/reducers/cartSlice';
// import { useAppDispatch } from '../../../hooks/dispApp';


//? setting the PASSED product to same as ProductType type.
type Props = {
    product: CartTest2
    aType: number
}

export interface CartTest2 extends ProductType {
    quantity?: number
}
type Props2 = {
    product: CartTest
    aType: number
}




const Product:FC<Props> = ({product}) => {
    const dispatch = useAppDispatch()
    const classes = useStyles();
    const [aQty, setQty] = useState(1)
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
            {/* <div onClick={() => dispatch(productsDelete(product.id))}>POOOOOOP</div> */}
            
            Qty:
                <select value={ (
              
                    aQty
                )
                } onChange={(e) => (
                  
                    setQty(Number(e.target.value))
                )
                    }>
                    {[...Array(product.stock).keys()].map(x => 
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                        )}
                </select>
                {
                 <div onClick={() => dispatch(setChange(product, aQty))}>Add to cart</div> 
             
                }
            <div onClick={() => dispatch(setCart(product, 2))}>Add 2 to cart</div>
  
            </Card>
        </div>
    )
}

export default Product
