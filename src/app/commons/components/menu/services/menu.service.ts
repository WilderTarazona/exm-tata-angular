import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TataMenuService {
  optionSelected: Subject<void> = new Subject<void>();
}
