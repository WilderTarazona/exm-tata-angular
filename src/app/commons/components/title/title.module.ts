import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TataTitleComponent } from './title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [TataTitleComponent],
  exports: [TataTitleComponent],
  imports: [
    CommonModule,
    MatIconModule,    
    MatButtonModule,
    MatTooltipModule,
    // MatDividerModule
  ]
})
export class TataTitleModule { }
