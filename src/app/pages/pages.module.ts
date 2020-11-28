import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { ProductModule } from './../product/product.module';
import { UXModule } from './../ux/ux.module';

import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
    declarations: [
        MainPageComponent,
    ],
    imports: [
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        CommonModule,
        ProductModule,
        UXModule
    ],
    exports: [
        MainPageComponent
    ],
    providers: [],
})
export class PagesModule { }
