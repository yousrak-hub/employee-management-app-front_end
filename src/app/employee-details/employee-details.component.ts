import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
