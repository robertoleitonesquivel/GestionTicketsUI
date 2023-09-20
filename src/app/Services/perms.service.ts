import { environment } from '@Environments/environment.development';
import { Perms } from '@Models/perms.interface';
import { ApiResponse } from '@Models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermsService {

  constructor(private http: HttpClient) { }

  public GetPerms(_idRol: number): Observable<ApiResponse<Perms[]>> {
    return this.http.get<ApiResponse<Perms[]>>(`${environment.apiUrl}Perms/GetPerms?IdRol=${_idRol}`);
  }
}
