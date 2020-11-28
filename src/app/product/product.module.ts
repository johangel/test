import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NewProductFormComponent } from './components/new-product-form/new-product-form.component';

@NgModule({
    declarations: [
        ProductCardComponent,
        ProductListComponent,
        SingleProductComponent,
        NewProductFormComponent
    ],
    providers: [],
    exports: [
        ProductCardComponent,
        ProductListComponent,
        SingleProductComponent,
        NewProductFormComponent
    ]
})
export class ProductModule { }
