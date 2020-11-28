import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { UXModule } from './../ux/ux.module';
import { ShortTextPipe } from './helpers/short-text.pipe';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NewProductFormComponent } from './components/new-product-form/new-product-form.component';


@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        CommonModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        UXModule
    ],
    declarations: [
        ShortTextPipe,
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
        NewProductFormComponent,
        ShortTextPipe
    ]
})
export class ProductModule { }
