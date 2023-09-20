import { environment } from '@Environments/environment.development';
import { Menus } from '@Models/menus.interface';
import { ApiResponse } from '@Models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http: HttpClient) { }

  public GetMenus( _idRol: number): Observable<ApiResponse<Menus[]>> {
    return this.http.get<ApiResponse<Menus[]>>(`${environment.apiUrl}Menus/GetMenus?IdRol=${_idRol}`);
  }
}
