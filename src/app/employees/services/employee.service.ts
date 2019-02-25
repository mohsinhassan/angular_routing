import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmploye : Employee[] = [{
    id : 1,
    title : 'first title',
    body : 'first body'
  },   
  {
    id : 2,
    title : 'second title',
    body : '2second body'
  }, 
];
 getEmployee() : Employee[]{
   return this.listEmploye;
 }

  constructor() { }
}
