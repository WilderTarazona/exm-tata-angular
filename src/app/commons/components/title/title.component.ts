import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tata-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TataTitleComponent {
  @Input() showReturnIcon: boolean = false;
  @Input() title: string = '';
  @Output() goBackEvent = new EventEmitter<void>();
  goBack(): void {
    this.goBackEvent.emit();
  }
}
