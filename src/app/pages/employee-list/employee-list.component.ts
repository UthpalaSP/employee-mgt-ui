import { Component, OnInit } from "@angular/core";
import { Employee } from "app/interfaces/employee";
import { EmployeeService } from "app/services/employee.service";
import { LazyLoadEvent } from "primeng/api";
import { Table } from "primeng/table";

@Component({
  selector: "employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];

  totalRecords!: number;

  loading: boolean = false;

  selectAll: boolean = false;

  selectedEmployees!: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loading = true;
  }

  loadEmployees(event: LazyLoadEvent) {
    this.loading = true;

    console.log(event);

    setTimeout(() => {
      this.employeeService
        .getEmployees({ lazyEvent: JSON.stringify(event) })
        .subscribe((res) => {
          this.employees = res.data.data.employees;
          this.totalRecords = res.data.data.totalCount;
          this.loading = false;
        });
    }, 1000);
  }

  clear(table: Table) {
    table.clear();
  }

  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
  }

  onSelectAllChange(event: any) {
    const checked = event.checked;

    // if (checked) {
    //     this.employeeService.getEmployees().then((res) => {
    //         this.selectedCustomers = res.customers;
    //         this.selectAll = true;
    //     });
    // } else {
    //     this.selectedCustomers = [];
    //     this.selectAll = false;
    // }
  }
}
