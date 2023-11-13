import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { TareaCreateComponent } from './pages/tarea-create/tarea-create.component';
import { TataTitleModule } from '@tata/commons/components';
import { InputMaskModule } from '@ngneat/input-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

const ANGULAR_MODULES = [
  CommonModule,
  TareaRoutingModule,
  ReactiveFormsModule,
  FormsModule,
];

const LIBS_MODULES = [
  InputMaskModule
];

const LIBS_LOCAL_MODULES = [
  TataTitleModule,
];

const MATERIAL_MODULES = [
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [
    TareaCreateComponent
  ],
  imports: [
    ...ANGULAR_MODULES,
    ...LIBS_MODULES,
    ...LIBS_LOCAL_MODULES,
    ...MATERIAL_MODULES
  ]
})
export class TareaModule { }
