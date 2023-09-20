import { ApiResponse } from '@Models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecoverPassword } from '@Models/updatePassword.interface';
import { Observable } from 'rxjs';
import { environment } from '@Environments/environment.development';
import { VerifyToken } from '@Models/verifyToken.interface';

@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {

  constructor(private http: HttpClient) { }


  public RecoverPassword(_data: RecoverPassword): Observable<ApiResponse<string>> {
    return this.http.patch<ApiResponse<string>>(`${environment.apiUrl}Login/RecoverPassword`, _data);
  }

  public verifyToken(_token: string): Observable<ApiResponse<VerifyToken>> {
    return this.http.get<ApiResponse<VerifyToken>>(`${environment.apiUrl}Login/VerifyToken?token=${_token}`);
  }

}
