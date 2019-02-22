import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
employees : Employee[] = [
    {
      id:  1,
      name: 'Ali',
      gender: 'Male',
      email: 'ali@online.com',
      phoneNumber: '343243242',
      department: 'IT',
      dateOfBirth: new Date('01-01-2000')
    },
    {
      id:  2,
      name: 'Asad',
      gender: 'Male',
      email: 'asad@online.com',
      phoneNumber: '343243242',
      department: 'Finance',
      dateOfBirth: new Date('02-02-2002')
    },
    {
      id:  1,
      name: 'Asma',
      gender: 'Female',
      email: 'asma@online.com',
      phoneNumber: '343243242',
      department: 'HR',
      dateOfBirth: new Date('01-01-2003')
    },


];
  constructor() { }

  ngOnInit() {
  }

}
