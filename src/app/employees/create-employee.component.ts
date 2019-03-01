import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee  = {
    userId : null,
    id : null,
    title : null,
    body : null
  };
  constructor(private _employeeService : EmployeeService, private _router : Router) { }

  ngOnInit() {
  }

  saveEmployee(empForm): void {
    console.log(empForm);
    empForm.id = 100;
    this._employeeService.saveEmployee(empForm);
    this._router.navigate(['list']);

    //Employee.push(empForm);

    //EmployeeService.push(empForm);

  }

}
