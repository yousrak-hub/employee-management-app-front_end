import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  saveEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployeeList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }
  onSubmit(): void {
    this.saveEmployee();
  }
}
