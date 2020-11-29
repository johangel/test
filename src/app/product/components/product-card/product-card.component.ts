import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from "../../models/product.model";
import { AngularFireStorage } from '@angular/fire/storage';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

    pictureUrl: string;

    constructor(public fireStorage: AngularFireStorage) { }

    ngOnInit(): void {
        this.fireStorage.ref(this.product.pictureRef).getDownloadURL().subscribe(url => {
            this.pictureUrl = url;
        })

    }

}
