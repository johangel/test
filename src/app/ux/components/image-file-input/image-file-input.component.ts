import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { IMAGE_EXTENSIONS } from './../../constants/images-files.constants';

@Component({
    selector: 'image-file-input',
    templateUrl: './image-file-input.component.html',
    styleUrls: ['./image-file-input.component.scss']
})
export class ImageFileInputComponent implements OnInit {

    constructor(public snackBar: MatSnackBar) { }

    @Input('pictureUrl') pictureUrl: string;
    @Input('canEdit') canEdit: boolean;

    @Output('onPictureChanged') onPictureChanged: EventEmitter<string> = new EventEmitter<string>()

    ngOnInit(): void {
    }

    handleFile(event) {
        let reader = new FileReader();
        console.log(event.target.files[0])
        reader.onload = fileReader => {

            if (IMAGE_EXTENSIONS.some(extension => extension === this.getExtension(event.target.files[0].name))) {
                this.pictureUrl = fileReader.target.result.toString();
                this.onPictureChanged.emit(this.pictureUrl);
            } else {

                let horizontalPosition: MatSnackBarHorizontalPosition = "right";
                let verticalPosition: MatSnackBarVerticalPosition = "top";

                this.snackBar.open('Formato de archivo no aceptado', 'cerrar', {
                    duration: 2000,
                    horizontalPosition,
                    verticalPosition,
                    panelClass: 'snack-error'
                })
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    getExtension(name: string) {
        return name.split('.')[1];
    }

}
