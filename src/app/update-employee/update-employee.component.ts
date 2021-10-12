import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
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
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      (date) => {
        this.goToEmployeeList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
