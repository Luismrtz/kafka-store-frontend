export type ProductType = {
    id: number,
    name: string,
    img: string,
    price: number,
    info: string
}

export type productStateType = {
    products: ProductType[]
}


export type ActionType = ReturnType<typeof selectProductActionCreator>
