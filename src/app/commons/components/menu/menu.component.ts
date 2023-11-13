import { Component, Input } from '@angular/core';
import { IMenuOption } from './interfaces/menu-option.interface';

@Component({
  selector: 'tata-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class TataMenuComponent {
  @Input() options: IMenuOption[] = [];
}
