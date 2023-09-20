import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private _snackBar: MatSnackBar) { }


  public Success(_message: string) {
    if (_message) {
      this._snackBar.open(_message, 'x', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['success-alert']
      });
    }
  }

  public Error(_message: string) {
    if (_message) {
      this._snackBar.open(_message, 'x', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['error-alert']
      });
    }
  }

  public Info(_message: string) {
    if (_message) {
      this._snackBar.open(_message, 'x', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['info-alert']
      });
    }
  }

  public Warning(_message: string) {
    if (_message) {
      this._snackBar.open(_message, 'x', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['warning-alert']
      });
    }
  }

  public ShowAlert(_statuCode: number, _message: string): void {
    if (_statuCode === 400 || _statuCode === 404) {
      this.Warning(_message);
    } else if (_statuCode === 500) {
      this.Error(_message);
    }
  }

}
