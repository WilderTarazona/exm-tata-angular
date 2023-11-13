import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TataSessionModule } from '@tata/commons/services';
import { TataHeaderModule, TataMenuModule } from '@tata/commons/components';

const MATERIAL_MODULES = [
  MatSidenavModule,
];

const LIB_LOCAL_MODULES = [
  // AdminHttpModule,
  TataSessionModule
];

const COMPONENT_MODULES = [
  TataHeaderModule,
  TataMenuModule,
];

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ...MATERIAL_MODULES,
    ...LIB_LOCAL_MODULES,
    ...COMPONENT_MODULES
  ]
})
export class AdminModule { }
