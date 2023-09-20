import { AlertsService } from '@Services/alerts.service';
import { UpdatePasswordService } from '@Services/update-password.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';


export const VerifyTokenResolver: ResolveFn<Observable<boolean | null>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const updatePasswordSvc = inject(UpdatePasswordService);
  const alertSvc = inject(AlertsService);
  const router = inject(Router);

  if (!route.queryParamMap.has('token')) {
    router.navigate(['login']);
    return of(false);
  }

  return updatePasswordSvc.verifyToken(route.queryParamMap.get('token') ?? '').pipe(
    map(res => {
      if (res.Data) {
        return true;
      } else {
        router.navigate(['login']);
        alertSvc.Success('El token ya fue utilizado o el token no se encuentra registrado, por favor vuelva a realizar el proceso de recuperación de contraseña.');
        return true;
      }
    }),
    catchError(error => {
      return of(null)
    })
  )
}
