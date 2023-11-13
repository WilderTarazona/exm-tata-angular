import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuOption } from '../../interfaces/menu-option.interface';
import { TataMenuService } from '../../services/menu.service';

@Component({
  selector: 'tata-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('initial<=>final', animate('250ms')),
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('default <=> rotated', animate('250ms')),
    ]),
  ],
})
export class TataMenuItemComponent implements OnInit {
  @Input() option!: IMenuOption;
  showBody = false;

  constructor(
    private menuService: TataMenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hasChildActive(this.option, true);
  }

  toggle(): void {
    this.showBody = !this.showBody;
  }

  optionSelectedHandler(): void {
    this.menuService.optionSelected.next();
  }

  activateOption = (linkUrl: string, baseUrl?: string): boolean => {
    if (baseUrl) {
      return this.router.url.includes(baseUrl);
    } else {
      return this.router.url === linkUrl;
    }
  }

  hasChildActive(item: IMenuOption, expand: boolean = false): boolean {
    if (item.options && item.options.length > 0) {
      let value = false;
      for (const opt of item.options) {
        if (!value && opt.url) {
          value = this.activateOption(opt.url, opt.baseUrl);
          if (value) {
            if (expand) {
              setTimeout(() => {
                this.showBody = true;
              }, 10);
            }
            return value;
          }
        }
      }
    }
    return false;
  }
}
