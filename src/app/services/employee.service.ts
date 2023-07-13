import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(params?: any) {
    return this.http.get<any>("http://localhost:5000/api/employee/getAll", {
      params: params,
    });
  }
}
