import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TataHeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    TataHeaderComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [TataHeaderComponent],
})
export class TataHeaderModule { }
