import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';
import { ACTIVE_COMPONENTS_CONSTANTS } from './../constants/pages.constants';
import { CreateProductForm } from './../../product/models/product.model';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

    constructor() { }

    activeComponentsContants = ACTIVE_COMPONENTS_CONSTANTS;
    activeComponent: string = this.activeComponentsContants.LIST;

    showBackArrow: boolean = false;
    pageTitle: string = 'Lista de productos';
    canEdit: boolean;

    product: Product = null;

    ngOnInit(): void {
    }

    showCreateProductForm() {
        this.activeComponent = this.activeComponentsContants.CREATE;
        this.showBackArrow = true;
        this.pageTitle = 'Datos de nuevo producto';
    }

    handleBack() {
        this.activeComponent = this.activeComponentsContants.LIST;
        this.showBackArrow = false;
        this.pageTitle = 'Lista de productos';
    }

    products: Product[] = [{
        id: '3',
        name: 'Bota Hombre Cuero Borcego Botita Briganti Zapato',
        description: `Tan solo una marca como Briganti puede ofrecer cada temporada colecciones inspiradas en las últimas tendencias, además de la auténtica artesanía zapatera perfeccionada a lo largo de los años. Como líderes en calzado de cuero, Briganti, diseña, innova y produce una gran variedad de zapatos premium empleando los mejores materiales argentinos, siempre teniendo presente los valores del armado artesanal.`,
        price: 1000,
        publishDate: new Date(),
        stock: 29,
        picture: {
            id: '123123',
            url: 'https://http2.mlstatic.com/D_Q_NP_671248-MLA44027165990_112020-AB.webp',
            name: 'zapatoru.url'
        },
        category: 'technology'
    },
    {
        id: '2',
        name: 'Bota Hombre Cuero Borcego Botita Briganti Zapato',
        description: `Tan solo una marca como Briganti puede ofrecer cada temporada colecciones inspiradas en las últimas tendencias, además de la auténtica artesanía zapatera perfeccionada a lo largo de los años. Como líderes en calzado de cuero, Briganti, diseña, innova y produce una gran variedad de zapatos premium empleando los mejores materiales argentinos, siempre teniendo presente los valores del armado artesanal.`,
        price: 1000,
        publishDate: new Date(),
        stock: 29,
        picture: {
            id: '123123',
            url: 'https://http2.mlstatic.com/D_Q_NP_671248-MLA44027165990_112020-AB.webp',
            name: 'zapatoru.url'
        },
        category: 'technology'
    },
    {
        id: '1',
        name: 'Bota Hombre Cuero Borcego Botita Briganti Zapato',
        description: `Tan solo una marca como Briganti puede ofrecer cada temporada colecciones inspiradas en las últimas tendencias, además de la auténtica artesanía zapatera perfeccionada a lo largo de los años. Como líderes en calzado de cuero, Briganti, diseña, innova y produce una gran variedad de zapatos premium empleando los mejores materiales argentinos, siempre teniendo presente los valores del armado artesanal.`,
        price: 1000,
        publishDate: new Date(),
        stock: 29,
        picture: {
            id: '123123',
            url: 'https://http2.mlstatic.com/D_Q_NP_671248-MLA44027165990_112020-AB.webp',
            name: 'zapatoru.url'
        },
        category: 'technology'
    },
    ]

    viewProduct(productId, canEdit) {
        this.product = this.products.find(product => product.id === productId);
        this.canEdit = canEdit;
        this.pageTitle = this.product.name;
        this.showBackArrow = true;
        this.activeComponent = this.activeComponentsContants.DETAIL;
    }

    postProduct(product: CreateProductForm) {
        this.products.push({ ...product, id: '12' });
        this.handleBack();
    }

    putProduct(product: Product) {
        console.log(product, 'product')
        this.products = this.products.map(productIndex => (productIndex.id === product.id) ? product : productIndex);
        this.handleBack();
    }

}
