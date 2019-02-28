import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';
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
    ;
    // = Employee;

    constructor(private _employeeService : EmployeeService , private _router : Router) { //, http: HttpClient
            
    }

    ngOnInit() {

      this.employees = this._employeeService.getEmployee();
      // this._employeeService.getEmployee();

      // console.log("this.employees");
      // console.log(this.employees);
      
    }

    logMessage(val)
    {
      console.log(val);
    }

    employeeDetails(employeeId){

      this._router.navigate(['/employees', employeeId]);

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
