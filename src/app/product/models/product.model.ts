export interface Picture {
    id?: string,
    url: string | ArrayBuffer,
    name: string
}

export interface Product extends CreateProductForm {
    id: string,
}

export interface CreateProductForm {
    name: string,
    description: string,
    price: number,
    picture: Picture,
    publishDate: Date,
    stock: number,
    category: string
}
