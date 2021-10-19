import React from 'react'
import OrderCall from '../components/ordercall/OrderCall'
//todo useEffect calls dispatch(ORDERID) to fetch order info
//todo (ID is pushed to params from placeOrder)




const OrderPage = () => {

    //todo grab address from localhost
    //todo grab cart info from localhost?
    
    //* THERE SHOULD BE A "PLACEORDER page, that will CREATE the UNIQUE id for ORDER INfo"
    //* THEN there should be the ORDER page, that grabs in address /order/:id from PLACEHOLDER page.


    //todo make a unique id before this page???... yes...
    //todo that unique id should IMMEDIATELY call the order info
    //todo should order info have a "TRUE/FALSE" for if the cart went through a purchase?


    //! call inside a component


    return (
        <div>
            <OrderCall/>
        </div>
    )
}

export default OrderPage
