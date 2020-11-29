import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EditProductForm, Product } from './../../models/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from './../../../../environments/environment.prod';
import { AngularFireStorage } from '@angular/fire/storage';
import { PRODUCTS_CATEGORIES } from './../../constants/products-categories.constant';

@Component({
    selector: 'single-product',
    templateUrl: './single-product.component.html',
    styleUrls: ['./single-product.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SingleProductComponent implements OnInit {

    editProductForm: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        stock: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        pictureRef: new FormControl('', Validators.required),
    })

    @Input('product') product: Product;
    @Input('canEdit') canEdit: boolean;
    @Output('onEditProduct') onEditProduct: EventEmitter<EditProductForm> = new EventEmitter<EditProductForm>();

    pictureUrl: string;
    categories = PRODUCTS_CATEGORIES;

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
        this.editProductForm.get('pictureRef').setValue(this.product.pictureRef)

        if (!this.canEdit) {
            this.editProductForm.disable();
        }

    }


    handlePicture(pictureUrl: string) {
        this.pictureUrl = pictureUrl;
    }

    submitForm() {
        this.onEditProduct.emit({
            product: {
                id: this.product.id,
                ...this.editProductForm.value
            },
            pictureUrl: this.pictureUrl
        })
    }

}
