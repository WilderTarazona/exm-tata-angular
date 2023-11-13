import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';


@Injectable()
export class TataLoadingService {
  isLoading$: Subject<boolean>;
  desactivar: boolean = false;

  constructor() {
    this.isLoading$ = new Subject<boolean>();
  }

  show(): void {
    console.log('mostrando loader')
    this.isLoading$.next(true);
  }

  hide(): void {
    console.log('cerrando loader')
    this.isLoading$.next(false);
  }

  fndesactivar(): void {
    this.desactivar = true;
  }
}
