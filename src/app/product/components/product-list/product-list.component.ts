import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


    @Input('products') products: Product[];
    filteredProducts: Product[];

    searchValue: string = '';

    @Output('onView') onView: EventEmitter<string> = new EventEmitter<string>();
    @Output('onEdit') onEdit: EventEmitter<string> = new EventEmitter<string>();

    @Output('onCreateProduct') onCreateProduct: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {

    }

    ngOnInit(): void {
        this.filteredProducts = this.products;
        console.log(this.products)
    }

    filterProducts() {
        this.filteredProducts = this.products.filter(product => JSON.stringify(product).includes(this.searchValue))
    }

    setProducts(products: Product[]) {
        this.products = products;
        this.filteredProducts = this.products.filter(product => JSON.stringify(product).includes(this.searchValue))
    }

}
