import { NgModule } from '@angular/core';
import { TataAlertService } from './alert.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [ MatSnackBarModule ],
  providers: [ TataAlertService ]
})
export class TataAlertModule { }
