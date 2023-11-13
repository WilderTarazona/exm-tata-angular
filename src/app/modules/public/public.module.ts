import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TataAlertModule, TataSessionModule } from '@tata/commons/services';
import { PublicComponent } from './public.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PublicHttpModule } from './commons/http/http.module';

const ANGULAR_MODULES = [
  PublicRoutingModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule,
];

const LIB_LOCAL_MODULES = [
  TataSessionModule,
  TataAlertModule,
  PublicHttpModule
];

const COMPONENTS = [
  PublicComponent,
  SignInComponent,
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    ...LIB_LOCAL_MODULES
  ]
})
export class PublicModule { }
