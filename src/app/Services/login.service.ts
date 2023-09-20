import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@Environments/environment.development';
import { Login } from '@Models/login.interface'
import { Observable } from 'rxjs';
import { ApiResponse } from '@Models/response.interface';
import { RecoverPassword } from '@Models/recover-password.interface';
import { Employees } from '@Models/employees.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public SignIn(_data: Login): Observable<ApiResponse<Employees>> {
    return this.http.get<ApiResponse<Employees>>(`${environment.apiUrl}Login/SignIn?email=${_data.Email}&password=${_data.Password}`);
  }

  public Send(_data: RecoverPassword): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${environment.apiUrl}Login/Send`, _data);
  }

}
