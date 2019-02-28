import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  private employee : Employee;
  constructor(private _aRouter: ActivatedRoute , private _employeeService : EmployeeService) { }


  ngOnInit() {
    const id = +this._aRouter.snapshot.paramMap.get('id');
    this.employee = this._employeeService.getEmployee(id);
    
  }

}
