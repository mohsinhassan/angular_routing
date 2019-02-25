import { Component, OnInit } from '@angular/core';
//import { Employee } from 'src/app/models/employee.model';
//import {HttpClient , HttpErrorResponse} from '@angular/common/http';
import {Error} from "tslint/lib/error";

import { Injectable } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

// interface UserResponse {
//   id : string,
//   title : string,
//   body : string
  
// }

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class ListEmployeeComponent implements OnInit {
    private employees; 
    // = Employee;

    constructor(private _employeeService : EmployeeService ) { //, http: HttpClient

      
    }
    ngOnInit() {

      this.employees = this._employeeService.getEmployee();
    }

    // ngOnInit() {

    //   this.http.get<UserResponse>('https://jsonplaceholder.typicode.com/posts').subscribe(
    //   data => {
    //     //thisemployees = data;
    //     employees : Employee[]  = data;
    //     console.log(data);

    //   });

    // }

    

    

   

  //   employees :   UserResponse => {
  //   console.log(employees);
  //   return employees;
  //   //console.log("Bio : " + data.bio);
  //   //console.log("Company : " + data.company);

  // } ,
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error) {

  //         console.log("client side Error ");
  //       } else {
  //         console.log("server side Error ");
  //       }
  //     }
  // ),

  
    //console.log("here");

  //  const req = this.http.post('https://jsonplaceholder.typicode.com/posts' , {
  //     title: 'Mohsin',
  //     body: 'hassan',
  //     userId: 1
  //   }).subscribe ( res => { console.log(res) }
  //   );
  // }
}
