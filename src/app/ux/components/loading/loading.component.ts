import { Component, OnInit } from '@angular/core';
import { LoadingService } from './../../services/loading.service';

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

    activeLoading: boolean

    constructor(public loadingService: LoadingService) { }

    ngOnInit(): void {
        this.activeLoading = this.loadingService.currentLoading;
        this.loadingService.loadingSubscriber.subscribe((state: boolean) => {
            this.activeLoading = state;
        })
    }

}
