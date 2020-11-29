import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product } from '../models/product.model';
import { Subscribable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { EditProductForm } from 'src/app/product/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    productsCollection: AngularFirestoreCollection<Product>;

    constructor(public firestorage: AngularFireStorage,
        public firestore: AngularFirestore) {
        this.productsCollection = this.firestore.collection('products')
    }

    getProducts(): Subscribable<Product[]> {
        return this.productsCollection.valueChanges({ idField: 'id' })
    }

    postProduct(product: Product): Promise<any> {
        return this.productsCollection.add(product)
    }

    async putProduct(editProductForm: EditProductForm): Promise<any> {
        let imageId: string = editProductForm.product.pictureRef;
        if (!editProductForm.pictureUrl.includes(editProductForm.product.pictureRef)) {
            await this.firestorage.ref(editProductForm.product.pictureRef).delete().toPromise().then(res => {
                console.log(res);
            })
            imageId = await this.saveFile(editProductForm.pictureUrl);
        }

        return this.productsCollection.doc(editProductForm.product.id).set(
            {
                ...editProductForm.product,
                pictureRef: imageId
            })

    }

    async saveFile(pictureRef: string): Promise<string> {
        let imageId = new Date().valueOf() + "-pic";
        await this.firestorage.ref(imageId).putString(pictureRef.split(',')[1], 'base64', { contentType: 'image/jpg', }).then(res => {
            if (!res) {
                imageId = null;
            }
        })
        return imageId;
    }

    async deleteProduct(product: Product): Promise<any> {
        await this.productsCollection.doc(product.id).delete()
        return this.firestorage.ref(product.pictureRef).delete();
    }

}
