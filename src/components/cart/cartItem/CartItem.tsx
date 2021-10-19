import React, {FC, useEffect, useState} from 'react'
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core'
import useStyles from '../CartStyles';

import { useAppDispatch } from '../../../hooks/dispApp';
import { addToCart, CartTest, removeFromCart, setCart, setChange,  } from '../../../state/slices/cartSlice';

 type Props = {
    cartInfo: CartTest
}




const CartItem: FC<Props> = ({cartInfo}) => {
    const dispatch = useAppDispatch()
    const classes = useStyles();
    const [aQty, setQty] = useState(1)

    // useEffect(() => {
    //     dispatch(productsFetch());
    // }, [dispatch])


    return (
        <div>
            <Card >
                    {/* {productAvocado.name} */}
    
                {/* <CardMedia/> */}
                <CardHeader title={cartInfo.name}/>
                <CardContent>
                    {cartInfo.info}
                </CardContent>
            {/* <div onClick={() => dispatch(productsDelete(product.id))}>POOOOOOP</div> */}
            
            Qty:
                <select value={ (
             
                    ( cartInfo?.quantity)
           
                )
                } onChange={(e) => (
                
                    dispatch(setChange(cartInfo, Number(e.target.value))) 
                )
                    }>
                    {[...Array(cartInfo.stock).keys()].map(x => 
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                        )}
                </select>
                {/* {
                    aType === 2 ? <div onClick={() => dispatch(setChange(product, aQty))}>Add to cart</div> 
                    : <div></div>
                } */}
            {/* <div onClick={() => dispatch(setCart(product, 2))}>Add 2 to cart</div> */}
        

            <div onClick={() => dispatch(removeFromCart(cartInfo.id))}>REMOVE FROM CART</div>
   
            </Card>
        </div> 
    )
}

export default CartItem
