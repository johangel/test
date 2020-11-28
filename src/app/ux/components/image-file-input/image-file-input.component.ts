import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Picture } from './../../../product/models/product.model';

@Component({
    selector: 'image-file-input',
    templateUrl: './image-file-input.component.html',
    styleUrls: ['./image-file-input.component.scss']
})
export class ImageFileInputComponent implements OnInit {

    constructor() { }

    @Input('picture') picture: Picture;

    input;
    @Output('onPictureChanged') onPictureChanged: EventEmitter<Picture> = new EventEmitter<Picture>()

    ngOnInit(): void {
    }

    handleFile(event) {
        let reader = new FileReader();
        console.log(event.target.files[0])
        reader.onload = fileReader => {
            this.picture = {
                ...this.picture,
                name: event.target.files[0].name,
                url: fileReader.target.result
            }
            this.onPictureChanged.emit(this.picture);
        }
        reader.readAsDataURL(event.target.files[0])
    }

}
