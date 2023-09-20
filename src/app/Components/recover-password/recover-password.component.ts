import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '@Services/common.service';
import { RecoverPassword } from '@Models/updatePassword.interface';
import { UpdatePasswordService } from '@Services/update-password.service';
import { finalize, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '@Models/response.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from '@Services/alerts.service';
import Validation from '@Utils/custom-validation/password-equals';
import { securityPassword } from '@Models/constantes';

@Component({
  selector: 'app-update-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  /*FORMULARIOS */
  frmUpdatePassword!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commonSvc: CommonService,
    private updataPasswordSvc: UpdatePasswordService,
    private activatedRoute: ActivatedRoute,
    private alertSvc: AlertsService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.onLoad();
  }

  private onLoad(): void {
    this.frmUpdatePassword = this.fb.group({
      Password: ['', [Validators.required, Validators.pattern(securityPassword)]],
      ConfirmPassword: ['', [Validators.required]],
      Token: [this.activatedRoute.snapshot.queryParamMap.get('token') ?? '', Validators.required]
    },
      {
        validators: [Validation.equalsPassword('Password', 'ConfirmPassword')]
      });
  }

  public Update(_data: RecoverPassword): void {
    this.commonSvc.show();
    this.updataPasswordSvc.RecoverPassword(_data).pipe(
      tap(res => {
        this.alertSvc.Success(res.Message);
        this.router.navigate(['login']);
      }),
      finalize(() => this.commonSvc.hide())
    ).subscribe({
      next: (res: ApiResponse<string>) => {
      },
      error: (error: HttpErrorResponse) => {
        this.alertSvc.Error(error.error);
      }
    });

  }
}
