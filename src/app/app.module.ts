import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { TableModule } from "primeng/table";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { UploadEmployeesComponent } from "./pages/upload-employees/upload-employees.component";
import { EmployeeListComponent } from "./pages/employee-list/employee-list.component";
import { FileUploadService } from "./services/file-upload.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UploadEmployeesComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
    }),
    SidebarModule,
    NavbarModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    TableModule,
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
