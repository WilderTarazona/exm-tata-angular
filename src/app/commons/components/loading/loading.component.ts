import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TataLoadingService } from './services/loading.service';

@Component({
  selector: 'tata-loading',
  template: `
    <div class="overlay" *ngIf="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class TataLoadingComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  private subscription: Subscription;

  constructor(private loadingService: TataLoadingService) {
    this.subscription = new Subscription()
  }

  ngOnInit (): void {
    this.subscription = this.loadingService.isLoading$.subscribe(res => this.isLoading = res);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
