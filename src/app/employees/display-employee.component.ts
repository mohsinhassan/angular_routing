import { Component, OnInit , Input ,OnChanges, SimpleChanges} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit , OnChanges {
 @Input() employee : Employee;
  constructor() { }

  ngOnInit() {
    console.log("here32");
  }

  ngOnChanges( changes : SimpleChanges){
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;


    console.log("previous : " + (previousEmployee ? previousEmployee.title : 'null'));
    console.log("Current : " + (currentEmployee ? currentEmployee.title : 'null'));
    //console.log(changes);

  } 

}
