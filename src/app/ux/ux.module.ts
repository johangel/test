import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button"
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LoadingService } from './services/loading.service';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
    imports: [
        MatButtonModule,
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule
    ],
    declarations: [
        ConfirmationDialogComponent,
        NavigationBarComponent,
        PageTitleComponent
    ],
    exports: [
        ConfirmationDialogComponent,
        NavigationBarComponent,
        PageTitleComponent
    ],
    providers: [LoadingService]
})
export class UXModule { }
