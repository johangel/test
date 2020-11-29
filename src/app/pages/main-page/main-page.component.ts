import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EditProductForm, Product } from 'src/app/product/models/product.model';
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


    products: Product[] = []

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

    putProduct(productForm: EditProductForm) {
        this.loadingService.updateLoading(true)
        this.productsService.putProduct(productForm).then(res => {
            this.loadingService.updateLoading(false)
            console.log(res, ' se subio')
            this.handleBack();
        }, err => {
            console.log(err, ' no se subio')

        })
    }

    deleteProduct(product: Product) {
        this.loadingService.updateLoading(true)
        this.productsService.deleteProduct(product).then(res => {
            this.loadingService.updateLoading(false)
            this.handleBack();
        }, err => {
            this.loadingService.updateLoading(false)
        })
    }

}
