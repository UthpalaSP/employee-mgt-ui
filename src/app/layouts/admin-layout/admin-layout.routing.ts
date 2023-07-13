import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UploadEmployeesComponent } from "app/pages/upload-employees/upload-employees.component";
import { EmployeeListComponent } from "app/pages/employee-list/employee-list.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "upload", component: UploadEmployeesComponent },
  { path: "employees", component: EmployeeListComponent },
];
