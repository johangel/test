import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button"
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { LoadingService } from './services/loading.service';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
    imports: [
        MatButtonModule,
        CommonModule,
        MatCardModule,
        MatIconModule
    ],
    declarations: [
        ConfirmationDialogComponent,
        NavigationBarComponent
    ],
    exports: [
        ConfirmationDialogComponent,
        NavigationBarComponent
    ],
    providers: [LoadingService]
})
export class UXModule { }
