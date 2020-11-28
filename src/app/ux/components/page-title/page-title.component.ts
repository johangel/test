import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

    constructor() { }

    @Input('title') title: string;
    @Input('showBackArrow') showBackArrow: string;

    @Output('onGoBack') onGoBack: EventEmitter<boolean> = new EventEmitter<boolean>()

    ngOnInit(): void {
    }

}
