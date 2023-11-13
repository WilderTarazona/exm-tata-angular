import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { TataMenuService } from './services/menu.service';

import { TataMenuItemComponent } from './components/menu-item/menu-item.component';
import { TataMenuComponent } from './menu.component';

const ANGULAR_MODULES = [
  CommonModule,
  RouterModule
];

const MATERIAL_MODULES = [
  MatListModule,
  MatIconModule,
];

const COMPONENTS = [
  TataMenuItemComponent,
  TataMenuComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES
  ],
  exports: [TataMenuComponent],
  providers: [TataMenuService]
})
export class TataMenuModule { }
