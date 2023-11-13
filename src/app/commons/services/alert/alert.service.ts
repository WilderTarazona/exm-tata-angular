import { Injectable } from '@angular/core';
import Swal, {
  SweetAlertIcon,
  SweetAlertOptions,
  SweetAlertResult,
} from 'sweetalert2';
import {
  MatSnackBar
} from '@angular/material/snack-bar';

@Injectable()
export class TataAlertService {
  iconColor!: string;

  constructor(private _snackBar: MatSnackBar) {}

  showAlertLoading(title = 'Cargando ...'): void {
    Swal.fire({
      title,
      allowEscapeKey: false,
      allowOutsideClick: false,
      heightAuto: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  closeAlertLoading(): void {
    Swal.close();
  }

  showMessage(
    icon: SweetAlertIcon,
    title: string,
    html: string | undefined = undefined,
    timer: number | undefined = undefined
  ): void {
    if (icon == 'success') {
      this.iconColor = '#80D2CE';
    } else if (icon == 'error') {
      this.iconColor = '#E64442';
    }

    setTimeout(() => {
      Swal.fire({
        title,
        html,
        icon,
        iconColor: this.iconColor,
        showConfirmButton: true,
        timer,
        heightAuto: false,
      });
    });
  }

  confirmMessage(
    icon: SweetAlertIcon,
    title: string,
    inputReason: boolean = false,
    messajeValidation: string | undefined = undefined
  ): Promise<SweetAlertResult<any>> {
    if (icon == 'success') {
      this.iconColor = '#80D2CE';
    } else if (icon == 'error') {
      this.iconColor = '#E64442';
    }

    let option: SweetAlertOptions = {
      title,
      icon,
      iconColor: this.iconColor,
      showConfirmButton: true,
      confirmButtonText: 'Sí',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#E64442',
    };

    if (inputReason) {
      option.input = 'textarea';
      // option.inputPlaceholder = 'Ingrese el motivo de la anulación',
      if (messajeValidation) {
        option.inputValidator = (value) => {
          return new Promise((resolve) => {
            if (value && value.length > 0) {
              resolve(null);
            } else {
              resolve(messajeValidation);
            }
          });
        };
      }
    }
    return Swal.fire(option);
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3 * 1000,
    });
  }
}
