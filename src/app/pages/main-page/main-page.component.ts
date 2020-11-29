import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';
import { ACTIVE_COMPONENTS_CONSTANTS } from './../constants/pages.constants';
import { ProductModule } from './../../product/product.module';
import { ProductsService } from './../../product/services/products.service';
import { LoadingService } from './../../ux/services/loading.service';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

    constructor(public productsService: ProductsService,
        public loadingService: LoadingService) { }

    activeComponentsContants = ACTIVE_COMPONENTS_CONSTANTS;
    activeComponent: string = this.activeComponentsContants.LIST;

    showBackArrow: boolean = false;
    pageTitle: string = 'Lista de productos';
    canEdit: boolean;

    product: Product = null;

    // products: Product[] = [{
    //     // id: '3',
    //     name: 'Bota Hombre Cuero Borcego Botita Briganti Zapato',
    //     description: `Tan solo una marca como Briganti puede ofrecer cada temporada colecciones inspiradas en las últimas tendencias, además de la auténtica artesanía zapatera perfeccionada a lo largo de los años. Como líderes en calzado de cuero, Briganti, diseña, innova y produce una gran variedad de zapatos premium empleando los mejores materiales argentinos, siempre teniendo presente los valores del armado artesanal.`,
    //     price: 1000,
    //     publishDate: new Date(),
    //     stock: 29,
    //     picture: 'https://http2.mlstatic.com/D_Q_NP_671248-MLA44027165990_112020-AB.webp',

    //     category: 'technology'
    // },
    // {
    //     // id: '2',
    //     name: 'Bota Hombre Cuero Borcego Botita Briganti Zapato',
    //     description: `Tan solo una marca como Briganti puede ofrecer cada temporada colecciones inspiradas en las últimas tendencias, además de la auténtica artesanía zapatera perfeccionada a lo largo de los años. Como líderes en calzado de cuero, Briganti, diseña, innova y produce una gran variedad de zapatos premium empleando los mejores materiales argentinos, siempre teniendo presente los valores del armado artesanal.`,
    //     price: 1000,
    //     publishDate: new Date(),
    //     stock: 29,
    //     picture: {
    //         id: '123123',
    //         url: 'https://http2.mlstatic.com/D_Q_NP_671248-MLA44027165990_112020-AB.webp',
    //         name: 'zapatoru.url'
    //     },
    //     category: 'technology'
    // },
    // {
    //     // id: '1',
    //     name: 'Bota Hombre Cuero Borcego Botita Briganti Zapato',
    //     description: `Tan solo una marca como Briganti puede ofrecer cada temporada colecciones inspiradas en las últimas tendencias, además de la auténtica artesanía zapatera perfeccionada a lo largo de los años. Como líderes en calzado de cuero, Briganti, diseña, innova y produce una gran variedad de zapatos premium empleando los mejores materiales argentinos, siempre teniendo presente los valores del armado artesanal.`,
    //     price: 1000,
    //     publishDate: new Date(),
    //     stock: 29,
    //     picture: {
    //         id: '123123',
    //         url: 'https://http2.mlstatic.com/D_Q_NP_671248-MLA44027165990_112020-AB.webp',
    //         name: 'zapatoru.url'
    //     },
    //     category: 'technology'
    // },
    // ]

    products: Product[]

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(products => {
            this.products = products
            console.log(this.products)
        })
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


    viewProduct(productId, canEdit) {
        this.product = this.products.find(product => product.id === productId);
        this.canEdit = canEdit;
        this.pageTitle = this.product.name;
        this.showBackArrow = true;
        this.activeComponent = this.activeComponentsContants.DETAIL;
    }

    async postProduct(product: Product) {
        this.loadingService.updateLoading(true);
        let imageId = await this.productsService.saveFile(product.pictureRef)
        if (imageId !== null) {
            product.pictureRef = imageId
            this.productsService.postProduct(product).then(res => {
                this.loadingService.updateLoading(false);
                this.handleBack();
            }, err => {
                this.loadingService.updateLoading(false);
            })
        } else {
            this.loadingService.updateLoading(false);

        }
    }

    // putProduct(product: Product) {
    //     console.log(product, 'product')
    //     this.products = this.products.map(productIndex => (productIndex.id === product.id) ? product : productIndex);
    //     this.handleBack();
    // }

}
