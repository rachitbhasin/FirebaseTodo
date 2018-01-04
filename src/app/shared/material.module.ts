import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule
  ],
})
export class SharedMaterialModule { }
