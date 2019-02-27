import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import {HttpClient , HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private listEmploye : Employee[] = [
    {
      userId : 100,
    id : 1,
    title : 'first title',
    body : 'first body'
  },   
  {
    userId : 200,
    id : 2,
    title : 'second title',
    body : '2second body'
   } 
]

getEmployee() : Employee[]{
  return this.listEmploye;
}

  // getEmployee() : Employee[] {

  //   this.http.get<Employee>('https://jsonplaceholder.typicode.com/posts').subscribe(
  //       data => {
  //       //console.log(data);
  //       return data;
  //     } ,
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error) {

  //         console.log("client side Error ");
  //       } else {
  //         console.log("server side Error ");
  //       }
  //     }
  // );

  //   }   
}
