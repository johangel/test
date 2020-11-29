import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
    selector: 'new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.scss']
})
export class NewProductFormComponent implements OnInit {

    constructor() { }

    @Output('onCreateProduct') onCreateProduct: EventEmitter<Product> = new EventEmitter<Product>()

    ngOnInit(): void {
    }

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
}
