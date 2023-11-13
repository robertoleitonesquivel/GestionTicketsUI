import { environment } from "@Environments/environment.development";
import { Employees } from "@Models/employees.interface";
import { ApiResponse } from "@Models/response.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  constructor(private http: HttpClient) {

  }

  GetAll(_skip: number, _take: number): Observable<ApiResponse<Employees[]>> {
    return this.http.get<ApiResponse<Employees[]>>(`${environment.apiUrl}Employees/GetAll?skip=${_skip}&take=${_take}`);
  }

  Post(_employee: Employees): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${environment.apiUrl}Employees/Add`, _employee);
  }

  Patch(_employee: Employees): Observable<ApiResponse<string>> {
    return this.http.patch<ApiResponse<string>>(`${environment.apiUrl}Employees/Update`, _employee);
  }

  Delete(_id: number): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(`${environment.apiUrl}Employees/Delete?id=${_id}`);
  }

}
