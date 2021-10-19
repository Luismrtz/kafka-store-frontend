//TODO: Clean up excess types/ interfaces... CONDENSE



export type ProductType = {
    id: number,
    name: string,
    img: string,
    price: number,
    info: string,
    stock: number
}

export type productStateType = {
    products: ProductType[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: null | string
}


export type ActionType = ReturnType<typeof selectProductActionCreator>



//? cart
// export type CartType = {
//     id: string | number
//     subtotal: string | null
//     quantity: number
//     line_items: ProductType[] | null
// }



// export type cartInitialStateType = {
//     carts: CartType[]
// }




export type CartActionType = ReturnType<typeof setCart>