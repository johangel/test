import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    constructor() { }

    showBackArrow: boolean = false;

    ngOnInit(): void {
    }

}
