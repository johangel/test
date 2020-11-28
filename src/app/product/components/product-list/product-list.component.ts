import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    constructor() { }

    @Input('products') products: Product[];

    searchValue: string;

    @Output('onView') onView: EventEmitter<string> = new EventEmitter<string>()
    @Output('onEdit') onEdit: EventEmitter<string> = new EventEmitter<string>()

    @Output('onCreateProduct') onCreateProduct: EventEmitter<boolean> = new EventEmitter<boolean>()

    ngOnInit(): void {
    }

    filterProducts(word: string) {

    }

}
