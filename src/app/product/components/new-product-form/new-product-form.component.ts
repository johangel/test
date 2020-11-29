import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';
import { PRODUCTS_CATEGORIES } from './../../constants/products-categories.constant';

@Component({
    selector: 'new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewProductFormComponent implements OnInit {

    constructor() { }

    @Output('onCreateProduct') onCreateProduct: EventEmitter<Product> = new EventEmitter<Product>()

    ngOnInit(): void {
    }

    categories = PRODUCTS_CATEGORIES;

    pictureRef: string;

    newProductForm: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        pictureRef: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        stock: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
    })

    handlePicture(pictureRef: string) {
        this.newProductForm.get('pictureRef').setValue(pictureRef);
        this.pictureRef = pictureRef;
    }

    submitForm() {
        this.onCreateProduct.emit(this.newProductForm.value)
    }

    cleanForm() {
        this.pictureRef = null;
        this.newProductForm.reset()
    }
}
