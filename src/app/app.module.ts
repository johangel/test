import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ProductModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
