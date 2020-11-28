import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Picture, CreateProductForm } from './../../models/product.model';

@Component({
    selector: 'new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.scss']
})
export class NewProductFormComponent implements OnInit {

    constructor() { }

    @Output('onCreateProduct') onCreateProduct: EventEmitter<CreateProductForm> = new EventEmitter<CreateProductForm>()

    ngOnInit(): void {
    }

    picture: Picture;

    newProductForm: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        pictureUrl: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        stock: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
    })

    handlePicture(picture: Picture) {
        this.newProductForm.get('pictureUrl').setValue(picture.url);
        this.picture = picture;
    }

    submitForm() {
        this.onCreateProduct.emit({
            ...this.newProductForm.value,
            picture: this.picture
        })
    }
}
