import { Component, OnInit , Input , SimpleChanges} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit  {
  private _employee : Employee;
  @Input()
  set employee(val : Employee){
    console.log("previous " + (this._employee ? this._employee.title : "null"));
    console.log("current " + val.title);
    this._employee = val;
  }
  get employee() : Employee
  {
    return this._employee;
  }
  
  constructor() { }

  ngOnInit() {
    console.log("here32");
  }

  // ngOnChanges( changes : SimpleChanges){
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;


  //   console.log("previous : " + (previousEmployee ? previousEmployee.title : 'null'));
  //   console.log("Current : " + (currentEmployee ? currentEmployee.title : 'null'));
  //   //console.log(changes);

  // } 

}
