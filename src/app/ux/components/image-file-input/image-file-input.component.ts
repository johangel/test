import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'image-file-input',
    templateUrl: './image-file-input.component.html',
    styleUrls: ['./image-file-input.component.scss']
})
export class ImageFileInputComponent implements OnInit {

    constructor() { }

    @Input('pictureUrl') pictureUrl: string;

    input;
    @Output('onPictureChanged') onPictureChanged: EventEmitter<string> = new EventEmitter<string>()

    ngOnInit(): void {
    }

    handleFile(event) {
        let reader = new FileReader();
        console.log(event.target.files[0])
        reader.onload = fileReader => {
            this.pictureUrl = fileReader.target.result.toString();
            // this.picture = {
            //     ...this.picture,
            //     name: event.target.files[0].name,
            //     url: fileReader.target.result
            // }
            this.onPictureChanged.emit(this.pictureUrl);
        }
        reader.readAsDataURL(event.target.files[0])
    }

}
