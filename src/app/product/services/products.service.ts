import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../models/product.model';
import { Subscribable } from 'rxjs';
import { environment } from './../../../environments/environment';

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
        return this.productsCollection.valueChanges()
    }

    postProduct(product: Product): Promise<any> {
        return this.productsCollection.add(product)
    }

    async saveFile(pictureRef: string): Promise<string> {
        let id = new Date().valueOf() + "-pic";
        await this.firestorage.ref(id).putString(pictureRef.split(',')[1], 'base64', { contentType: 'image/jpg', }).then(res => {
            if (!res) {
                id = null;
            }
        })
        return id;
    }

}
