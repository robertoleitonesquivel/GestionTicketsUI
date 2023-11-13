import { Employees } from "@Models/employees.interface";
import { KeyStorage } from "@Models/enums";
import { AlertsService } from "@Services/alerts.service";
import { CommonService } from "@Services/common.service";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";


export const verifySession = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const commonSevice = inject(CommonService);
  const alertSvc = inject(AlertsService);
  const router = inject(Router);

  const currentSession = commonSevice.getStorage<Employees>(KeyStorage.CURRENT_USER);
  if (currentSession) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
