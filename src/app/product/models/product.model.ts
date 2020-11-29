export interface Product {
    id?: string,
    name: string,
    description: string,
    price: number,
    pictureRef: string,
    publishDate: Date,
    stock: number,
    category: string
}

export interface EditProductForm {
    product: Product,
    pictureUrl: string
}
