import { Injectable } from '@angular/core';
import { Employees } from "@Models/employees.interface";
import { KeyStorage } from "@Models/enums";
import { CommonService } from "@Services/common.service";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private commonSvc: CommonService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('Login')) {
      return next.handle(req);
    }

    const currentUser: Employees = this.commonSvc.getStorage<Employees>(KeyStorage.CURRENT_USER);

    return next.handle(req.clone({
      setHeaders: {
        'Authorization': `Bearer ${currentUser.Jwt}`,
        'Content-type': 'application/json; charset=utf-8'
      }
    }));


  }
}
