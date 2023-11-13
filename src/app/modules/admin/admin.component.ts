import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { IHeaderOptions, IMenuOption, TataMenuService } from '@tata/commons/components';
import { IRuta, IUsuarioInfoResponse, TataSessionService } from '@tata/commons/services';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  @ViewChild(MatDrawer, { static: true }) drawer!: MatDrawer;

  menuOptions: IMenuOption[] = [];
  headerOptions: IHeaderOptions | null = null;
  isMobile: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private sessionService: TataSessionService,
    private breakpointObserver: BreakpointObserver,
    private menuService: TataMenuService
  ) {
    console.log('entrando al admin')
  }

  ngOnInit(): void {
    this.subscribe(this.drawer);
    const sessionUser = this.sessionService.user;
    if (sessionUser) {
      this.fillUserInfo(sessionUser);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  signOut(): void {
    this.sessionService.destroy();
    this.router.navigateByUrl('/');
  }

  private fillUserInfo(user: IUsuarioInfoResponse): void {
    this.headerOptions = {
      projectName: 'Web de Requerimientos',
      companyName: user.empresa,
      userNames: `${user.nombres} ${user.apellidoPaterno}`,
      userEmail: user.correo
    };
    this.menuOptions = this.getMenu(user.rutas);
  }

  private getMenu(rutas: IRuta[]): IMenuOption[] {
    return rutas.filter(x => x.esMenu).map(x => {
      const ruta: IMenuOption = {
        title: x.nombre,
        icon: x.icono,
        url: x.url
      };
      if (x.hijos) {
        ruta.options = this.getMenu(x.hijos)
      }
      console.log('ruta', ruta);
      return ruta;
    });
  }

  subscribe(drawer: MatDrawer): void {
    const breakpointSubscription = this.breakpointObserver
      .observe('(max-width: 767px)')
      .subscribe((res) => (this.isMobile = res.matches));

    const menuSubscription = this.menuService.optionSelected
      .asObservable()
      .pipe(filter(() => this.isMobile))
      .subscribe(() => drawer.close());

    this.subscription.add(breakpointSubscription);
    this.subscription.add(menuSubscription);
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
  }
}
