import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    currentLoading: boolean = false;
    loadingSubscriber: EventEmitter<boolean> = new EventEmitter<boolean>()

    constructor() {
        this.loadingSubscriber.emit(this.currentLoading);
    }

    updateLoading(state: boolean) {
        this.currentLoading = state;
        this.loadingSubscriber.emit(state);
    }

}
