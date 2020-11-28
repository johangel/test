import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from "../../models/product.model";

@Component({
    selector: 'product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent implements OnInit {

    @Input('product') product: Product;

    @Output('onView') onView: EventEmitter<string> = new EventEmitter<string>()
    @Output('onEdit') onEdit: EventEmitter<string> = new EventEmitter<string>()

    constructor() { }

    ngOnInit(): void {
    }

}
