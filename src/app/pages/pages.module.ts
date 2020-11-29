import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { ProductModule } from './../product/product.module';
import { UXModule } from './../ux/ux.module';

import { MainPageComponent } from './main-page/main-page.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
        UXModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    exports: [
        MainPageComponent
    ],
    providers: [],
})
export class PagesModule { }
