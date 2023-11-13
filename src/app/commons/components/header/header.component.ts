import { Component, Input } from '@angular/core';
import { IHeaderOptions } from './interfaces/header-options.interface';
import { MatDrawer } from '@angular/material/sidenav';
import { TataSessionService } from '@tata/commons/services';
import { Router } from '@angular/router';

@Component({
  selector: 'tata-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class TataHeaderComponent {
  @Input() options: IHeaderOptions | null = null;
  @Input() drawer: MatDrawer| null = null;
  constructor(
    private sessionService: TataSessionService,
    private router: Router
  ){

  }
  signOut(): void {
    this.sessionService.destroy()
    this.router.navigateByUrl('public/sign-in')
  }
}
