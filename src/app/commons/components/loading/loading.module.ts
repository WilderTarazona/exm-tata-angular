import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TataLoadingComponent } from './loading.component';
import { TataLoadingService } from './services/loading.service';

@NgModule({
  declarations: [TataLoadingComponent],
  imports: [CommonModule],
  exports: [TataLoadingComponent],
  providers: [TataLoadingService]
})
export class TataLoadingModule {}
