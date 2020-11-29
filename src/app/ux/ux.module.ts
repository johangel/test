import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button"
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { LoadingService } from './services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ImageFileInputComponent } from './components/image-file-input/image-file-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
    imports: [
        MatButtonModule,
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
    ],
    declarations: [
        NavigationBarComponent,
        PageTitleComponent,
        ImageFileInputComponent,
        LoadingComponent,
        ConfirmDialogComponent,
    ],
    exports: [
        NavigationBarComponent,
        PageTitleComponent,
        ConfirmDialogComponent,
        ImageFileInputComponent,
        LoadingComponent
    ],
    providers: [LoadingService]
})
export class UXModule { }
