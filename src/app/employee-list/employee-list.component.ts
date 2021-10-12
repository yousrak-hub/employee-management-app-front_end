import { EmployeeService } from './../service/employee.service';
import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }
  getEmployeeList(): void {
    this.employeeService.getEmployeeList().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }
  updateEmployee(id: number): void {
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      this.getEmployeeList();
    });
  }
  employeeDetails(id: number): void {
    this.router.navigate(['employee-details', id]);
  }
}
