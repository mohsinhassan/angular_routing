import { Component, OnInit , Input , OnChanges, SimpleChanges} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit , OnChanges  {
  private _employee : Employee;
  @Input() employeeId : number;

  @Input()
  set employee(val : Employee){
    // console.log("previous " + (this._employee ? this._employee.title : "null"));
    // console.log("current " + val.title);
    this._employee = val;
  }
  get employee() : Employee
  {
    return this._employee;
  }
  
  constructor() { }

  ngOnInit() {
    //console.log("here32");
  }
  ngOnChanges( changes : SimpleChanges){
    for ( const propName of Object.keys(changes)) {
      const change = changes[propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);
      
      console.log(propName + "change from " + from + " to " + to);
    }

  }

  // ngOnChanges( changes : SimpleChanges){
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;


  //   console.log("previous : " + (previousEmployee ? previousEmployee.title : 'null'));
  //   console.log("Current : " + (currentEmployee ? currentEmployee.title : 'null'));
  //   //console.log(changes);

  // } 

}
