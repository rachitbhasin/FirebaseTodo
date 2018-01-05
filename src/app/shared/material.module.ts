import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule
  ],
})
export class SharedMaterialModule { }
