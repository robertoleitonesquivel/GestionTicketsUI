import { AlertsService } from '@Services/alerts.service';
import { Employees } from "@Models/employees.interface";
import { EmployeesService } from "@Services/employee.service";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable, catchError, map, of } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';


export const GetEmployeesResolver: ResolveFn<Observable<Employees[] | null>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const employeeService = inject(EmployeesService);
  const alertsService = inject(AlertsService);

  return employeeService.GetAll(0, 5).pipe(
    map(res => res.Data),
    catchError((error: HttpErrorResponse) => {
      alertsService.ShowAlert(error.status, error.error);
      return of(null);
    })
  )


}
