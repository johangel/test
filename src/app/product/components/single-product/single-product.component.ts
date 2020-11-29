import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './../../models/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from './../../../../environments/environment.prod';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
    selector: 'single-product',
    templateUrl: './single-product.component.html',
    styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {

    editProductForm: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        stock: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        pictureUrl: new FormControl('', Validators.required),
    })

    @Input('product') product: Product;
    @Input('canEdit') canEdit: boolean;
    @Output('onEditProduct') onEditProduct: EventEmitter<Product> = new EventEmitter<Product>();

    pictureUrl: string;

    constructor(public fireStorage: AngularFireStorage) { }

    ngOnInit(): void {
        this.setForm();
    }

    setForm() {
        this.fireStorage.ref(this.product.pictureRef).getDownloadURL().subscribe(url => {
            this.pictureUrl = url;
        })

        this.editProductForm.get('name').setValue(this.product.name)
        this.editProductForm.get('description').setValue(this.product.description)
        this.editProductForm.get('price').setValue(this.product.price)
        this.editProductForm.get('stock').setValue(this.product.stock)
        this.editProductForm.get('category').setValue(this.product.category)
        this.editProductForm.get('pictureUrl').setValue(this.product.pictureRef)

        if (!this.canEdit) {
            this.editProductForm.disable();
        }

    }


    handlePicture(pictureUrl: string) {
        this.pictureUrl = pictureUrl;
    }

    submitForm() {
        this.onEditProduct.emit({
            ...this.editProductForm.value
        })
    }

}
