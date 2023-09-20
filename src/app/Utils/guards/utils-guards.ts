import { AlertsService } from '@Services/alerts.service';
import { CommonService } from '@Services/common.service';
import { UpdatePasswordService } from '@Services/update-password.service';
import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, of } from 'rxjs';

export const logout = (next: ActivatedRouteSnapshot) => {
  inject(CommonService).clearStorage();
  return true;
};

export const verifyToken = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const updatePasswordSvc = inject(UpdatePasswordService);
  const alertSvc = inject(AlertsService);
  const router = inject(Router);

  if (!route.queryParamMap.has('token')) {
    router.navigate(['login']);
    return false;
  }

  return updatePasswordSvc.verifyToken(route.queryParamMap.get('token') ?? '').pipe(
    map(res => {
      if (res.Data.Value) {
        return true;
      } else {
        router.navigate(['login']);
        alertSvc.Info(res.Data.Message);
        return false;
      }
    }),
    catchError((error: HttpErrorResponse) => {
      router.navigate(['login']);
      alertSvc.ShowAlert(error.status, `Lo sentimos ha ocurrido un error, error: ${error.error}, vuelva a recargar la pagina, si el problema persiste contacte al administrador del sistema.`);
      return of(false);
    })
  )
};
