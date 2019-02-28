import { Component, OnInit , Input } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
   
  @Input() employee : Employee;
  
  constructor() { }

  ngOnInit() {
    console.log("here32");
  }

  logMessage(val)
  {
    console.log(val);
  }

  // ngOnChanges( changes : SimpleChanges){
  //   for ( const propName of Object.keys(changes)) {
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);
      
  //     console.log(propName + "change from " + from + " to " + to);
  //   }

  // }

  // ngOnChanges( changes : SimpleChanges){
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;


  //   console.log("previous : " + (previousEmployee ? previousEmployee.title : 'null'));
  //   console.log("Current : " + (currentEmployee ? currentEmployee.title : 'null'));
  //   //console.log(changes);

  // } 

}
