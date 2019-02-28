import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
//import {HttpClient , HttpErrorResponse} from '@angular/common/http';
import {Error} from "tslint/lib/error";

import { Injectable } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class ListEmployeeComponent implements OnInit  {
    private employees : Employee[]; 
    employeeToDisplay : Employee;
    private arrayIndex = 1;
    // = Employee;

    constructor(private _employeeService : EmployeeService ) { //, http: HttpClient

      
    }

    ngOnInit() {

      this.employees = this._employeeService.getEmployee();
      this.employeeToDisplay = this.employees[0];
      // this._employeeService.getEmployee();

      // console.log("this.employees");
      // console.log(this.employees);
      
    }

    logMessage(val)
  {
    console.log(val);
  }

    // nextEmployee() : void{
    //   //console.log(this.arrayIndex);
    //   if(this.arrayIndex <= 1)
    //   {
    //     this.employeeToDisplay = this.employees[this.arrayIndex];
    //     this.arrayIndex ++;
    //   }
    //   else { 
    //     this.employeeToDisplay = this.employees[0];
    //     this.arrayIndex = 1;
    //   } 
    // }

   
}
