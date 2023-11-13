import { Component } from '@angular/core';
import { TataAlertService } from '@tata/commons/services';
import { ITarea } from '../../commons/interfaces/tarea/tarea.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { createMask } from '@ngneat/input-mask';
import { MASK_ALPHANUMERIC } from '@tata/commons/constants';

@Component({
  selector: 'app-tarea-create',
  templateUrl: './tarea-create.component.html',
  styleUrls: ['./tarea-create.component.scss']
})
export class TareaCreateComponent {
  description: string = '';
  displayedColumns: string[] = ['select', 'description', 'delete'];
  dataSource = new MatTableDataSource<ITarea>([]);
  descriptionInputMask = createMask(MASK_ALPHANUMERIC);
  
  data: ITarea[] = [];

  constructor(
    private alertService: TataAlertService,
  ) {}

  add(): void {
    if (this.description) {
      this.addTask();
      this.reloadTable();
      this.cleanInput();
    }
  }

  removeRow(indexToRemove: number): void {
    this.data = this.data.filter((element, index) => index !== indexToRemove);
    this.reloadTable();
  }

  cleanInput(): void {
    this.description = '';
  }

  hasChecked(): boolean {
    return this.data.filter(e => e.isCompleted).length > 0;
  }

  toggleTask(item: ITarea, event: MatCheckboxChange): void {
    item.isCompleted = event.checked;
  }

  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.data.forEach(e => e.isCompleted = false);
      return;
    }

    this.data.forEach(e => e.isCompleted = true);
  }

  isSelected(index: number): boolean {
    return this.data.findIndex((e, i) => i == index && e.isCompleted == true) > -1;
  }

  isAllSelected(): boolean {
    const numSelected = this.data.filter(e => e.isCompleted).length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: ITarea, index?: number): string {
    if (!row || !index) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(index) ? 'deselect' : 'select'} row ${index + 1}`;
  }

  private addTask(): void {
    const task: ITarea = {
      descripcion: this.description,
      isCompleted: false,
    }
    this.data.push(task);
    this.alertService.openSnackBar(`Se agregó la tarea ${this.description}`);
  }

  private reloadTable(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }
}
