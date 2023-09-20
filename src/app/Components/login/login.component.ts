
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, finalize, forkJoin, map, of, switchMap, tap } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '@Models/response.interface';
import { Login } from '@Models/login.interface';

import { CommonService } from '@Services/common.service';
import { LoginService } from '@Services/login.service';

import { regexEmail } from '@Models/constantes';
import { RecoverPassword } from '@app/Models/recover-password.interface';
import { AlertsService } from '@app/Services/alerts.service';
import { Employees } from '@Models/employees.interface';
import { KeyStorage } from '@Models/enums';
import { Router } from '@angular/router';
import { SelectRolComponent } from '@Components/select-rol/select-rol.component';
import { MatDialog } from '@angular/material/dialog';
import { Rols } from '@Models/rols.interface';
import { Menus } from '@Models/menus.interface';
import { Perms } from '@Models/perms.interface';
import { PermsService } from '@Services/perms.service';
import { MenusService } from '@Services/menus.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /*FORMULARIOS */
  frmLogin!: FormGroup;
  frmRecoverPassword!: FormControl;

  /*VARIABLES */
  hide: boolean = true;
  recoverPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginSvc: LoginService,
    private commonSvc: CommonService,
    private alertsSvc: AlertsService,
    private permsSvc: PermsService,
    private menusSvc: MenusService,
    private router: Router,
    private matDialog: MatDialog
  ) {

  }


  ngOnInit(): void {
    this.OnLoad();
  }

  private OnLoad(): void {
    this.frmLogin = this.fb.group({
      Email: ['', [Validators.required, Validators.pattern(regexEmail)]],
      Password: ['', [Validators.required]]
    });
    this.frmRecoverPassword = new FormControl('', [Validators.required, Validators.pattern(regexEmail)]);
  }

  public SignIn(_data: Login): void {

    this.commonSvc.show();
    this.loginSvc.SignIn(_data).pipe(
      tap(res => {
        this.commonSvc.setStorage<Employees>(res.Data, KeyStorage.CURRENT_USER);
      }),
      switchMap(res => {
        if (res.Data.Rols && res.Data.Rols.length > 1) {
          return this.SelectRol(res.Data.Rols).pipe(
            map(result => {
              return {
                IdRol: result
              }
            })
          );
        } else {
          return of({
            IdRol: res.Data.Rols[0].Id
          });
        }
      }),
      switchMap(res => forkJoin({
        Perms: this.permsSvc.GetPerms(res.IdRol),
        Menus: this.menusSvc.GetMenus(res.IdRol)
      })),
      tap(res => {
        this.commonSvc.setStorage<Perms[]>(res.Perms.Data, KeyStorage.PERMS);
        this.commonSvc.setStorage<Menus[]>(res.Menus.Data, KeyStorage.MENUS);
        this.router.navigate(['/']);
      }),
      finalize(() => this.commonSvc.hide())
    ).subscribe({
      next: (callback) => {

      },
      error: (error: HttpErrorResponse) => {
        this.alertsSvc.ShowAlert(error.status, error.error);
      }
    });
  }

  public Send(_email: string): void {
    this.commonSvc.show();
    this.loginSvc.Send({ Email: _email } as RecoverPassword).pipe(
      tap(res => this.frmRecoverPassword.reset()),
      tap(res => this.alertsSvc.Success(res.Message)),
      finalize(() => this.commonSvc.hide())
    ).subscribe({
      next: (callback: ApiResponse<string>) => {
      },
      error: (error: HttpErrorResponse) => {
        this.alertsSvc.ShowAlert(error.status, error.error);
      }
    });
  }

  private SelectRol(_rols: Rols[]): Observable<number> {

    return this.matDialog.open(SelectRolComponent, {
      width: '98%',
      maxWidth: '600px',
      height: '98%',
      maxHeight: '600px',
      data: _rols
    }).afterClosed().pipe(
      map((res: number) => res)
    )
  }
}
