export interface Picture {
    id: string,
    url: string,
    name: string
}

export interface Product {
    id: string,
    name: string,
    description: string,
    price: string,
    picture: Picture,
    publishDate: string,
    stock: number
}
