import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// import * as ConfirmDialogComponentText from './confirm-dialog.component.json';

export interface DialogData {
    info?: DialogInfo,
    showConfirmImage?: boolean,
    showButtonIcons?: boolean,
    backdropLocked?: boolean
}

export interface DialogInfo {
    title?: string,
    question?: string,
    declineButtonText?: string,
    confirmButtonText?: string
}

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent implements OnInit {

    // componentText = ConfirmDialogComponentText;

    constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.dialogRef.addPanelClass('dialog-card');
        this.dialogRef.disableClose = (data.backdropLocked !== undefined) ? data.backdropLocked : true;
    }

    ngOnInit() {
        //console.log(this.data);
    }

    decline(): void {
        this.dialogRef.close(false);
    }

    confirm(): void {
        this.dialogRef.close(true);
    }

}
